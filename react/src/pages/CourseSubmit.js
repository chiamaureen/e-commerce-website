// import Navbar from '../components/Navebar'
import BodyCourseSubmit from '../components/course/BodyCourseSubmit'
// import Footer from '../components/Footer'
import React, { useState, useEffect } from 'react'
import '../CourseSubmit.css'

function CourseSubmit() {
  const [mydata, setMydata] = useState()
  const getData = async () => {
    const res = await fetch('http://localhost:3000/course/get-db', {
      method: 'get',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const data = await res.json()

    setMydata(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      {/* <Navbar /> */}
      <BodyCourseSubmit data={mydata} />
      {/* <Footer /> */}
    </>
  )
}

export default CourseSubmit
