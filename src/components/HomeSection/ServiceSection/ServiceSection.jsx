import React from 'react'
import './ServiceSection.css'
import ServiceData from '../../../utils/ServiceData/ServiceData'
import { useProductContext } from '../../../State/context/ProductContext'

const ServiceSection = () => {
    const {products, getUniqueValue} = useProductContext()
    // console.log(products);
    let category = getUniqueValue(products, "category")
  return (
    <div className='serviceSection_container'>
      <div className="serviceSection_topRow serviceSection_row">
        <div className="serviceSection_products">
            <ServiceData suffix="+" num={products.length} title="products" />
        </div>
        <div className="serviceSection_categories">
        <ServiceData suffix="+" num={category.length}  title="category" />

        </div>
        <div className="serviceSection_productsStar">
        <ServiceData suffix="+" num={5} title="Star"/>

        </div>
      </div>
      <div className="serviceSection_bottomRow serviceSection_row">
        <div className="serviceSection_bottomRow_customerSupport">
        <ServiceData suffix="/7" num={24}  title="Customer Support" />

        </div>
        <div className="serviceSection_bottomRow_orderAccuracy">
        <ServiceData suffix="%" num={99} title="Order Accuracy Rate" />

        </div>
      </div>
    </div>
  )
}

export default ServiceSection
