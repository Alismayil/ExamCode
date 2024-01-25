import React from 'react'
import './NotProductBasket.scss'
import { MdShoppingCartCheckout } from "react-icons/md";
import { Link } from "react-router-dom";

function NotProductBasket() {
  return (
    <div className='notProductBasket'>
      <MdShoppingCartCheckout style={{fontSize:'100px'}} />
      <Link to={'/'}>Go Home</Link>
    </div>
  )
}

export default NotProductBasket
