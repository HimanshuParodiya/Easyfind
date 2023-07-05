import React from 'react'
import './QNA.css'
import Accordion from './Accordion/Accordion'
import faqData from './Accordion/FAQ.json'

const QNA = () => {
  return (
    <div className='QNA_container'>
      <h1 className='QNA_heading'>Frequently Asked Questions</h1>
       {
        faqData.faqs.map((data)=>{
          return <Accordion key={data.id} sNo={data.id} question={data.question} answer={data.answer} />
        })
       }
    </div>
  )
}

export default QNA
