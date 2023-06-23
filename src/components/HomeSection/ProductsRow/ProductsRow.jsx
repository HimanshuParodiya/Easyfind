import React from 'react'
import './ProductsRow.css'
import EachProductRow from './EachProductRow'

const ProductsRow = () => {
  return (
    <div className='productsRow__container'>
        <h1 className='productsRow__container__heading'>Let's See Our Some Products </h1>
        <EachProductRow />
    </div>
  )
}

export default ProductsRow
