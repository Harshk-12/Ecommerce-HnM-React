
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import cartcontext from './Cartcontext'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
  let{additem}=useContext(cartcontext)
  






  return (
    <div className='dark'>
<ul className='Navbar' >
    <div ><li><h1>H n K</h1></li></div>
    <div className='navlist'>
  <li ><Link to='/' className='link'>Home</Link></li>
  <li ><Link to='/about' className='link'>About</Link></li>
  <li ><Link to='/contact' className='link'>Contact</Link></li>
  <li > <Link to='/cartitem' className='link' >  Cart <ShoppingCartIcon></ShoppingCartIcon> <span className='cartlength'>{additem.length}</span></Link></li>
  </div>
   
</ul>


<Outlet></Outlet>
    </div>
  )
}

export default Navbar