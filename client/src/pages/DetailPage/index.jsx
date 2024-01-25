import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Helmet} from "react-helmet";
import NotMean from '../../components/NotMean';
import axios from 'axios'
import './DetailPage.scss'

function DetailPage() {

  const {id}=useParams()
  const [detail, setDetail] = useState();
  
  async function getDetail() {
    const res= await axios.get(`http://localhost:3000/exam/${id}`)
    console.log(res.data)
    setDetail(res.data)
  }

  useEffect(() => {
  getDetail()
  }, []);
  
  return (
    <>
    <NotMean/>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Detail</title>
            </Helmet>
      <div className="detailPage">
      {
        detail ? 
        <div className="detailCart">
          <img src={detail.image} alt="" />
          <p>{detail.name}</p>
          <p>{detail.price}$</p>
          <p>{detail.comment}</p>
        </div>
        
        :""
      }
      </div>
    </>
  )
}

export default DetailPage
