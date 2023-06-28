import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div style={{paddingTop:90, color:"#111",height: "50vh", textAlign: "center", fontSize:80}}>
      404
      <div>This page Does not exist</div>
      <NavLink to='/' style={{border: "2px solid #111", borderRadius: 20, fontSize:30, padding: "20px 15px", color:"#111", backgroundColor: "lightBlue"}}>Go To Home page</NavLink>
    </div>
  )
}

export default ErrorPage
