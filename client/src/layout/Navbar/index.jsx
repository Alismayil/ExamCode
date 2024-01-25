import React, { useContext, useState } from 'react'
import './Navbar.scss'
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BasketContext } from '../../context/BasketContext';
import { WishlistContext } from '../../context/WishlistContext';

function Navbar() {
  const [open, setOpen] = useState(false);
  const {basket}=useContext(BasketContext)
  const {wishlist}=useContext(WishlistContext)
  function handleOPen() {
    setOpen(!open)
  }
  return (
    <nav>
      <div className="iconBox">
      <Link style={{textDecoration:'none', color:'black'}} className='link' to={'/'}>
      <h1>Selling <p>.</p>
        </h1>
      </Link>
      </div>
      <ul>
        <li><Link className='link' to={'/'}>Home</Link></li>
        <li><Link className='link' to={'product'}>Product</Link></li>
        <li><Link className='link' to={'/about'}>About</Link></li>
        <li><Link className='link' to={'/special'}>Special</Link></li>
        <li><Link className='link' to={'/wishlist'}>Wishlist
        {
          wishlist.length !== 0 ? <div className="length">{wishlist.length}</div> :""
        }</Link></li>
        <li><Link className='link' to={'/basket'}>Basket
        {
          basket.length !== 0 ? <div className="length">{basket.length}</div> :""
        }
        
        </Link></li>
        <li><Link className='link' to={'/add'}>Add</Link></li>
      </ul>
      <div className="menuBox" onClick={handleOPen}> 
      <IoMdMenu />
      </div>
 
      <div className={`respNav ${open ? 'open':""}`}>
             <div className="deletebox" onClick={handleOPen}>
      <IoClose />
      </div>
      <ul>
        <li><Link className='link' to={'/'}>Home</Link></li>
        <li><Link className='link' to={'/product'}>Product</Link></li>
        <li><Link className='link' to={'/about'}>About</Link></li>
        <li><Link className='link' to={'/special'}>Special</Link></li>
        <li><Link className='link' to={'/wishlist'}>Wishlist</Link></li>
        <li><Link className='link' to={'/basket'}>Basket</Link></li>
        <li><Link className='link' to={'/add'}>Add</Link></li>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar

