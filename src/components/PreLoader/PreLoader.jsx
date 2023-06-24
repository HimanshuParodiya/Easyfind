import React from 'react'
import './PreLoader.css'
import PreloaderVideo from '/src/assets/PreLoader/EasyFind.mp4'


const PreLoader = () => {
  return (
    <div className="preloader" style={{width: "100vw"}}>
      <video className='preloader__video' autoPlay  muted>
        <source src={PreloaderVideo} type="video/mp4" />
      </video>
      {/* Add any additional elements or styles for the preloader */}
    </div>
  )
}

export default PreLoader
