import React, { useContext } from 'react'
import {Helmet} from "react-helmet";
import NotMean from '../../components/NotMean';
import '../BasketPage/BasketPage.scss'
import { MdDelete } from "react-icons/md";
import { WishlistContext } from '../../context/WishlistContext';
import NotProductWishlist from '../../components/NotProductWishlist';


function BasketPage() {
  const {wishlist, handleAlldelete, handleDelete}=useContext(WishlistContext)

  return (
    <>
    <NotMean/>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Wishlist</title>
            </Helmet>
            <div className="basketPage">

{
  wishlist.length=== 0 ? <NotProductWishlist/>:""
}

{
  wishlist.length !== 0 ?   <p className='allDelete' onClick={handleAlldelete}>AllDelete</p> :""
}

{
  wishlist && wishlist.map((item)=>(
 <div className="basketCart" key={item._id}>
  <img src={item.image} alt="" />
  <button className='delete' onClick={()=>handleDelete(item._id)}><MdDelete /></button>
   <div className="textBox">
   <p>{item.name}</p>
    <p>{item.price}$</p>
    <p>{item.comment}</p>
   </div>
 </div>
  ))
}
            </div>
    </>
  )
}

export default BasketPage

