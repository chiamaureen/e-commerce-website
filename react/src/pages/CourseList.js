import ControlledCarousel from '../components/course/ControlledCarousel'
import CourseSearch from '../components/course/CourseSearch'
import TopCourse from '../components/course/TopCourse'
import React, { useState, useEffect } from 'react'
import '../CourseList.css'

function CourseList() {
  const [inputSearch, setInputSearch] = useState('')
  const [mydata, setMydata] = useState([])
  const getData = async () => {
    const res = await fetch('http://localhost:3000/course/get-db', {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ inputSearch }),
    })
    const data = await res.json()

    setMydata(data)
  }
  useEffect(() => {
    getData()
  }, [])
  // console.log(mydata)
  return (
    <>
      <ControlledCarousel />
      <CourseSearch
        setInputSearch={setInputSearch}
        inputSearch={inputSearch}
        getData={getData}
      />
      <TopCourse mydata={mydata} />
    </>
  )
}

export default CourseList
