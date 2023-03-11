import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import cartcontext from "./Cartcontext";

function Cartitem() {
  let { additem, setadditem  } = useContext(cartcontext);
  let [subtotal,setsubtotal]=useState(0)
 
  // delelete item
function remove(e ,id){
  e.preventDefault()
  console.log(id)
 let filteredArray= additem.filter((tab,x)=>{
    //x is additem array and id is button clicked id
    return(id!==x)

  })
 setadditem(filteredArray)

 
}


function quantitychange(e,id){

  let value=parseInt(e.target.value)
  let updatedadditem=additem.map((item)=>{
    if(item.id===id){
    return ({...item,quantity:value})
    }
    return item

  })
  setadditem(updatedadditem)
}

// SUBTOTAL
useEffect(()=>{
  function total(){
    let sumofarray= additem.map((item)=>{
  return item.price*item.quantity
     })
    setsubtotal( Math.floor(sumofarray.reduce((a,b)=>{return  a+b})))
  
  
     console.log(subtotal)
   }
   total()
},[additem])



  return (
    <>
      <div className="cartitems-container">
        {
        additem.map((item,index) => {
          return (  
  <>
 {/* ADDED ITEMS INTO CART */}
 
 <div className="cartitems-flexbox">
  {/* content-1 */}
          <div className="cartitems" key={item.id}>  
            <img src={item.photo} alt="" />

           <div className="cartitems-content">
              <p className="cartitem-title">Title - {item.title}</p>
            <p>Price - ${(item.price)}</p> 
          
             <a  href="" className="delete" onClick={(e)=>remove(e,index)}>Remove</a>
            </div>
           </div>
           <p className="line"></p>
 

{/* CARTITEM-CONTENT2 */}
         <div className="cartitems-content2">

           {/* COUNTER */}
           <form className="counter-form"  onChange={(e)=>quantitychange(e, item.id)}>
            Qty:<input type="number" min='1' max='5' defaultValue='1'  /> 
           </form>

           <p> ₹ {Math.floor(item.price*85*item.quantity)}</p> 
           </div>


           </div>

           
        
            </>
          );
        })

        }
        {/* <img src={item.title} alt="" /> */}
      </div>
      
      {/* SUBTOTAL */}
      <div className="subtotal">
        <h2>Subtotal:₹ {subtotal*85}</h2>
      </div>

    </>
  );
}

export default Cartitem;
