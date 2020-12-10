import ControlledCarousel from '../components/course/ControlledCarousel'
import TopCourseDetail from '../components/course/TopCourseDetail'
import BodyCourseDetail from '../components/course/BodyCourseDetail'
import React, { useState, useEffect } from 'react'
import '../CourseDetail.css'

function CourseDetail() {
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
    console.log(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <ControlledCarousel />
      <TopCourseDetail data={mydata} />
      <BodyCourseDetail data={mydata} />
    </>
  )
}

export default CourseDetail
