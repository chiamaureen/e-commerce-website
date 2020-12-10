import React from 'react'
import './C.sass'
import { Carousel } from 'antd'

function MyCarousel() {
  const contentStyle = {
    //height: '700px',
    width: '100%',
  }

  return (
    <>
      {/* <div className="gallery-picture-first">
        <img src="images/1-1.png" alt="" />
      </div> */}

      <Carousel effect="fade" autoplay>
        <div className="banner">
          <img style={contentStyle} src="images/1-5.png" alt="" />
        </div>
        <div className="banner">
          <img style={contentStyle} src="images/2.jpg" alt="" />
        </div>
        <div className="banner">
          <img style={contentStyle} src="images/3.jpg" alt="" />
        </div>
      </Carousel>
    </>
  )
}

export default MyCarousel
