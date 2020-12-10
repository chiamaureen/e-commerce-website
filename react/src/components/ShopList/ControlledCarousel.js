import Carousel from 'react-bootstrap/Carousel'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
function ControlledCarousel() {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <div className="shop_list_top">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://localhost:3001/img/ba.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://localhost:3001/img/b2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://localhost:3001/img/bo3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
export default ControlledCarousel