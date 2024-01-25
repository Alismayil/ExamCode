import React from 'react'
import './NotProductWishlist.scss'
import { BsFillHeartbreakFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function NotProductWishlist() {
  return (
    <div className='notProductWishlist'>
      <BsFillHeartbreakFill style={{fontSize:'100px'}} />
      <Link to={'/'}>Go Home</Link>
    </div>
  )
}

export default NotProductWishlist
