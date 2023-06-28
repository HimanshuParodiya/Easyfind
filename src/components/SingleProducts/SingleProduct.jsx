import React from 'react'
import "./SingleProduct.css"
import { useParams } from 'react-router'


const SingleProduct = () => {
  const {id} = useParams()
  console.log(id);
  return (
    <div className='singleProduct__container'>
      Single Product
    </div>
  )
}

export default SingleProduct
