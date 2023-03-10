import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import cartcontext from './Cartcontext'


function Cart(){
  let [carts,setcart]=useState([])

    let {additem, clickdata}=useContext(cartcontext)

     // API FETCHING DATA
    useEffect(()=>{
    
      async function fetchdata (){
        let data= await axios.get("https://fakestoreapi.com/products/")
     console.log(data.data)
     setcart(data.data)
     
     }
     fetchdata()
     },[]) 

      // localStorage.setItem('cartvalue',JSON.stringify(additem))


  return (
<>
   
    <div className='elements'>
        {
            carts.map((item,index)=>{
                return(
                    <div className='child-element'>

                   <Link to={`singlepage/${item.id}`}> <img src={item.image} alt="" /></Link>
                 <Link to={`singlepage/${item.id}`} className='item-title'>{item.title}</Link>

{/* added to cart */}
                {additem.find((i)=>i.id===item.id)!==undefined?
                <p className='addedtocart'>Added to cart</p>
                :
                    <a href='' className='add' onClick={(e)=>clickdata(e,{photo:item.image, title:item.title,  price:item.price, id:item.id ,quantity:1})} >Add to Cart</a>}
                    </div>
                )
            })
        
             

        }

    </div>
    
    </>
  )
}

export default Cart