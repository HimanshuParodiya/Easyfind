import React from 'react'
import './ServiceData.css'
import CountUp from 'react-countup'

const ServiceData = ({suffix,title,num}) => {
  // console.log(preValue);
  return (
    <div className='serviceData_container'>
      <div className="serviceData_data">
         <CountUp start={0} end={num} suffix={suffix} delay={5}  duration={4} />
      </div>
      <div className="serviceData_title">{title}</div>
      
    </div>
  )
}


export default ServiceData
