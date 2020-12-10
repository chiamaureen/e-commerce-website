import Carousel from 'react-bootstrap/Carousel'
import React, { useState } from 'react'

function ControlledCarousel() {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://localhost:3001/IMG/ControlledCarousel/pic001A.jpg"
            alt="slide01"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://localhost:3001/IMG/ControlledCarousel/pic002A.jpg"
            alt="slide02"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://localhost:3001/IMG/ControlledCarousel/pic003A.jpg"
            alt="slide03"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://localhost:3001/IMG/ControlledCarousel/pic004A.jpg"
            alt="slide04"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://localhost:3001/IMG/ControlledCarousel/pic005A.jpg"
            alt="slide05"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://localhost:3001/IMG/ControlledCarousel/pic006A.jpg"
            alt="slide06"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://localhost:3001/IMG/ControlledCarousel/pic007A.jpg"
            alt="slide07"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://localhost:3001/IMG/ControlledCarousel/pic008A.jpg"
            alt="slide08"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://localhost:3001/IMG/ControlledCarousel/pic009A.jpg"
            alt="slide09"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://localhost:3001/IMG/ControlledCarousel/pic010A.jpg"
            alt="slide10"
          />
        </Carousel.Item>
      </Carousel>
    </>
  )
}
export default ControlledCarousel
