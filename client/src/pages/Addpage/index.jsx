import React, { useEffect, useState } from 'react'
import './Addpage.scss'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import {Helmet} from "react-helmet";
import NotMean from '../../components/NotMean';

function Addpage() {
  const [product, setProduct] = useState([]);
  const [sort, setSort] = useState(null);
  const [search, setSearch] = useState('');

  async function getData() {
    const res=await axios.get("http://localhost:3000/exam")
    setProduct(res.data)
  }

  async function handleDelete(id) {
 await axios.delete(`http://localhost:3000/exam/${id}`)
 getData()
  }

  useEffect(() => {
  getData()
  }, []);
  
  
  return (
    <>
    <NotMean/>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Add</title>
            </Helmet>
  <div className="addPage">
  <Formik
       initialValues={{ image: '', name: '', comment: '', price: '' }}
       validationSchema={Yup.object({
        image: Yup.string()
           .required('Required'),
           name: Yup.string()
           .matches(/^[a-zA-Z ]+$/, "Please Only String Text")
           .required('Required'),
           comment: Yup.string()
           .required('Required'),
           price: Yup.number()
           .positive("Please enter Pozitive Number")
           .required('Required'),
        
       })}
       onSubmit={async (values, { setSubmitting , resetForm}) => {
        await axios.post("http://localhost:3000/exam",values)
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
           getData()
           resetForm()
       }}
     >
       <Form>
         <label htmlFor="image">Image</label>
         <Field name="image" type="text" />
        <div className="error">
        <ErrorMessage name="image" />
        </div>

         <label htmlFor="name">Name</label>
         <Field name="name" type="text" />
        <div className="error">
        <ErrorMessage name="name" />
        </div>

         <label htmlFor="comment">Comment</label>
         <Field name="comment" type="text" />
        <div className="error">
        <ErrorMessage name="comment" />
        </div>

         <label htmlFor="price">Price</label>
         <Field name="price" type="number" />
        <div className="error">
        <ErrorMessage name="price" />
        </div>
 
         <button type="submit">Add</button>
       </Form>
     </Formik>

     <table>
     <thead>
        <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Comment</th>
            <th>Price</th>
            <th>Delete</th>
        </tr>
    </thead>
    <tbody>
        {
          product && product
          .filter((x)=>x.name.toLowerCase().includes(search.toLowerCase()))
          .sort((a,b) =>{
            if (sort && sort.asc === true) {
             return (a[sort.property] > b[sort.property]) ? 1 : ((b[sort.property] > a[sort.property]) ? -1 : 0)
            }else if (sort && sort.asc === false) {
             return (a[sort.property] < b[sort.property]) ? 1 : ((b[sort.property] < a[sort.property]) ? -1 : 0)
            }
            else{
              return 0
            }
          })
          .map((item)=>(
            <tr key={item._id}>
            <td><img src={item.image} alt="" /></td>
            <td>{item.name}</td>
            <td>{item.comment}</td>
            <td>{item.price}$</td>
            <td><button onClick={()=>handleDelete(item._id)}>Delete</button></td>
        </tr>
          ))
        }
    </tbody>
     </table>
     <div className="searchBox">
      <input type="text" placeholder='Search' onChange={(e)=>setSearch(e.target.value)} />
      <div className="btns">
      <button onClick={()=>setSort({property:"price", asc:true})}>0-9</button>
      <button onClick={()=>setSort({property:"price", asc:false})}>9-0</button>
      <button onClick={()=>setSort(null)}>Default</button>
      </div>
     </div>
  </div>
    </>
  )
}

export default Addpage
