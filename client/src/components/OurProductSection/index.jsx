import React, { useContext, useEffect, useState } from "react";
import "./OurProductSection.scss";
import { MdOutlineStar } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import axios from 'axios'
import { BasketContext } from "../../context/BasketContext";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../context/WishlistContext";

function OurProductSection() {
  const [product, setProduct] = useState([]);

  async function  getProductdata() {
    const res= await axios.get('http://localhost:3000/exam')
    setProduct(res.data)
  }

  useEffect(() => {
  getProductdata()
  }, []);
  
  const {handleAddBasket}=useContext(BasketContext)
  const {handleAddwishlist , wishlist}=useContext(WishlistContext)
  
  return (
    <section id="ourProductSection">
      <div className="upBox">
        <p>POPULAR PRODUCTS</p>
        <span>Our Products</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut
          consequatur laboriosam ipsam.
        </p>
      </div>
      <div className="downBox">
    { product && product.map((item)=>(
 <div className="cartBox" key={item._id}>
 <div className="imgBox">
   <div className="hoverBox"></div>
   <img
     src={item.image}
     alt=""
   />
 </div>
 <div className="textBox">
   <p>{item.name}</p>
   <div className="count">
  <div className="countBox">
  <MdOutlineStar  className="star"/>
<span>5.0</span>
  </div>
  <div className="countBox">
    { wishlist. find((x)=>x._id === item._id)
    ? 
  <IoMdHeart className="like" style={{color:'red'}} onClick={ ()=>handleAddwishlist(item)} />
    :
    <IoMdHeart className="like" onClick={ ()=>handleAddwishlist(item)} />
    }
<span>29</span>
  </div>
   </div>
   <span>{item.comment}</span>
   <div className="btns">
     <button className="btn1" onClick={()=>handleAddBasket(item)}>Cart</button>
    <Link to={`/detail/${item._id}`}>
    <button className="btn2">View</button>
    </Link>
   </div>
 </div>
</div>
    ))}
       
       
      </div>
    </section>
  );
}

export default OurProductSection;
