import React, { useState, useEffect, useContext } from "react";
import About from "./About";
import Contact from "./Contact";
import axios from "axios";
import Cartitem from "./Cartitem";
import Navbar from "./Navbar";
import cartcontext from "./Cartcontext";
import Cart from "./Cart";
import { Outlet, Route, Routes, BrowserRouter } from "react-router-dom";
import "./Shoppinglist.css";
import Singlepage from "./Singlepage";

//additem: it has array of index items clicked via addtocart
//cart: it has response of api 
// data : it has the value of singleitem clicked via image
function Home() {



   //
      let [additem, setadditem] = useState(
        localStorage.getItem('cartvalue') == null
          ? []
          : JSON.parse(localStorage.getItem('cartvalue'))
      );
//
useEffect(()=>{
  localStorage.setItem('cartvalue',JSON.stringify(additem))
},[additem])
//
  
//ADD TO CART FUNC
function clickdata(e, index) {
  e.preventDefault();
  console.log(index)
  setadditem([...additem, index]);
  console.log(additem)
  
  
}
  

  return (
    <>
      <cartcontext.Provider value={{ additem,setadditem ,clickdata }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Cart />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/cartitem" element={<Cartitem />}></Route>
              <Route path="/Singlepage/:id" element={<Singlepage />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </cartcontext.Provider>

      <Outlet></Outlet>
    </>
  );
}

export default Home;
