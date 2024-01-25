import React, { useContext } from 'react'
import {Helmet} from "react-helmet";
import { BasketContext } from '../../context/BasketContext';
import NotMean from '../../components/NotMean';
import './BasketPage.scss'
import NotProductBasket from '../../components/NotProductBasket';
import { MdDelete } from "react-icons/md";


function BasketPage() {
  const {basket, handleCountVal, handleAlldelete, handleDelete}=useContext(BasketContext)

  const subtotal=basket.reduce((subtotal, item)=>subtotal+=(item.price * item.count), 0)
  return (
    <>
    <NotMean/>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Basket</title>
            </Helmet>
            <div className="basketPage">

{
  basket.length=== 0 ? <NotProductBasket/>:""
}
{
  basket.length !== 0 ?   <p className='subtotal'>SubTotal: {subtotal}$</p> :""
}
{
  basket.length !== 0 ?   <p className='allDelete' onClick={handleAlldelete}>AllDelete</p> :""
}

{
  basket && basket.map((item)=>(
 <div className="basketCart" key={item._id}>
  <img src={item.image} alt="" />
  <button className='delete' onClick={()=>handleDelete(item._id)}><MdDelete /></button>

   <div className="textBox">
   <p>{item.name}</p>
    <p>{item.price}$</p>
    <p>{item.comment}</p>
   <div className="countBox">
   <button onClick={()=>handleCountVal(true , item._id)} >+</button>
   <p>{item.count}</p>
    <button onClick={()=>handleCountVal(false , item._id)} >-</button>
   </div>

    <p>Total: {item.total}$</p>
   </div>
 </div>
  ))
}
            </div>
    </>
  )
}

export default BasketPage
