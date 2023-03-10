import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


function Singlepage() {
let[data,setsingledata]=useState([])

    let {id}=useParams()

    useEffect(()=>{

   
async function singledata(){
    let data1=await axios.get(`https://fakestoreapi.com/products/${id}`)
    console.log(data1.data)
    setsingledata(data1.data)
    
}
singledata()
},[])

  return (
    <div className='singleitemwrapper'>
{
  <div className='singleitem'>
    
   <img src={data.image} alt="" />
   

  <p>{data.title}</p>
  <h4>{data.description}</h4>
  <p>Price - ${data.price}</p>
  
   </div>
  
 }

    </div>
  )
}

export default Singlepage