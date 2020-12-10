import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
function ProductAdd(props) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [Specialoffer, setSpecialoffer] = useState('')
  const [detail, setDetial] = useState('')
  const [category, setCategory] = useState(0)
  const [photoFormdata, setphotoFormdata] = useState('')
  const [imgurl, setImgurl] = useState()

  const changeCategory = (e) => {
    setCategory(e.target.value)
  }
  const AddProduct = async () => {
    const newData = {
      name,
      price,
      Specialoffer,
      detail,
      category,
      imgurl: 'http://localhost:3001/img/' + imgurl,
    }
    const res = await fetch('http://localhost:3000/product/addProduct', {
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
    await fetch('http://localhost:3000/product/upload-photo', {
      method: 'POST',
      body: photoFormdata,
    })
    props.history.push('/ProductData')
  }

  const uploadPhoto = (e) => {
    let file = e.target.files[0]
    let photoName = file.name
    const photo = new FormData()
    photo.append('imgurl', file)
    setphotoFormdata(photo)
    setImgurl(photoName)
  }

  const display = (
    <>
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">產品名稱</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="產品名稱"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput2">價格</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput2"
            placeholder="價格"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value)
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput3">定價</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput3"
            placeholder="定價"
            value={Specialoffer}
            onChange={(e) => {
              setSpecialoffer(e.target.value)
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput4">產品描述</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput4"
            placeholder="產品描述"
            value={detail}
            onChange={(e) => {
              setDetial(e.target.value)
            }}
          />
        </div>
        <form name="photo">
          <div class="form-group">
            <label for="exampleFormControlInput5">圖片</label>
            <input
              name="imgurl"
              type="file"
              class="form-control"
              id="exampleFormControlInput5"
              placeholder="圖片"
              accept=".jpg,.jpeg,.png"
              onChange={uploadPhoto}
            />
            <img
              style={
                imgurl
                  ? {
                      height: '160px',
                      width: '160px',
                    }
                  : {}
              }
              src={'http://localhost:3001/img/' + imgurl}
              alt=""
            />
          </div>
        </form>

        <div class="form-group">
          <label for="exampleFormControlSelect1">產品分類</label>
          <select
            value={category}
            onChange={changeCategory}
            class="form-control"
            id="exampleFormControlSelect1"
          >
            <option value="1">身體清潔</option>
            <option value="2">臉部保養</option>
            <option value="3">頭髮護理</option>
            <option value="4">彩妝</option>
          </select>
        </div>
      </form>
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => {
          AddProduct()
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
export default withRouter(ProductAdd)
