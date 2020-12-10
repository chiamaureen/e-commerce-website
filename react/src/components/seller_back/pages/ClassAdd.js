/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
function ClassAdd(props) {
  const [act_title, setAct_title] = useState('')
  const [date, setDate] = useState('')
  const [city, setCity] = useState('')
  const [view_place, setView_place] = useState('')
  const [title, setTitle] = useState(0)
  const [text, setText] = useState('')
  const [act_members, setAct_members] = useState()
  const [photoFormdata, setphotoFormdata] = useState('')
  const [pic_carousel, setPic_carousel] = useState()

  const AddClass = async () => {
    const newData = {
      act_title,
      date,
      city,
      view_place,
      title,
      text,
      act_members,
      pic_carousel: 'http://localhost:3001/CourseList/' + pic_carousel,
    }
    const res = await fetch('http://localhost:3000/seller/ClassAdd', {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    console.log(JSON.stringify(newData))

    const data = await res.json()
    console.log(data)
    await fetch('http://localhost:3000/seller/upload-classphoto', {
      method: 'POST',
      body: photoFormdata,
    })
    props.history.push('/ClassData')
  }

  const uploadPhoto = (e) => {
    let file = e.target.files[0]
    let photoName = file.name
    const photo = new FormData()
    photo.append('pic_carousel', file)
    setphotoFormdata(photo)
    setPic_carousel(photoName)
  }

  const display = (
    <>
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">課程名稱</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="課程名稱"
            value={act_title}
            onChange={(e) => {
              setAct_title(e.target.value)
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput2">開課日期</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput2"
            placeholder="開課日期"
            value={date}
            onChange={(e) => {
              setDate(e.target.value)
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput3">課程地區</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput3"
            placeholder="課程地區"
            value={city}
            onChange={(e) => {
              setCity(e.target.value)
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput4">課程地點</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput4"
            placeholder="課程地點"
            value={view_place}
            onChange={(e) => {
              setView_place(e.target.value)
            }}
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlInput4">課程內容</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput4"
            placeholder="課程內容"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlInput4">課程描述</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput4"
            placeholder="產品描述"
            value={text}
            onChange={(e) => {
              setText(e.target.value)
            }}
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlInput4">課程最多人數</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput4"
            placeholder="課程最多人數"
            value={act_members}
            onChange={(e) => {
              setAct_members(e.target.value)
            }}
          />
        </div>

        <form name="photo">
          <div class="form-group">
            <label for="exampleFormControlInput5">圖片路徑</label>
            <input
              name="pic_carousel"
              type="file"
              class="form-control"
              id="exampleFormControlInput5"
              placeholder="圖片"
              accept=".jpg,.jpeg,.png"
              onChange={uploadPhoto}
            />
            <img
              style={
                pic_carousel
                  ? {
                    height: '160px',
                    width: '160px',
                  }
                  : {}
              }
              src={'http://localhost:3001/CourseList/' + pic_carousel}
              alt=""
            />
          </div>
        </form>
      </form>
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => {
          AddClass()
        }}
      >
        送出
      </button>
    </>
  )
  return (
    <>
      <div className="container">{display}</div>
    </>
  )
}
export default withRouter(ClassAdd)
