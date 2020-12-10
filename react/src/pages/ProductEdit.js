import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
function ProductEdit(props) {
  const [myData, setMydata] = useState([])
  console.log(props)
  const sid = props.match.params.sid
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [Specialoffer, setSpecialoffer] = useState('')
  const [detail, setDetial] = useState('')
  const [imgurl, setImgUrl] = useState('')
  const [category, setCategory] = useState('')
  const changeCategory = (e) => {
    setCategory(e.target.value)
  }
  const getproductData = async (sid) => {
    const res = await fetch(
      'http://localhost:3000/product/ProductData/' + sid,
      {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    )
    const data = await res.json()
    setMydata(data)
    console.log(data[0].name)

    //  const [name, setName] = useState('')
    //  const [price, setPrice] = useState('')
    //  const [Specialoffer, setSpecialoffer] = useState('')
    //  const [detail, setDetial] = useState('')
    //  const [imgurl, setImgUrl] = useState('')
    //  const [category, setCategory] = useState('')
    setName(data[0].name)
    setPrice(data[0].price)
    setSpecialoffer(data[0].Specialoffer)
    setDetial(data[0].detail)
    setImgUrl(data[0].imgurl)
    setCategory(data[0].category)
  }
  const updateData = async () => {
    const newData = { name, price, Specialoffer, detail, imgurl, category }
    const res = await fetch('http://localhost:3000/product/edit/' + sid, {
      method: 'post',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const data = res.json()
    alert('修改成功')
    props.history.push('/ProductData')
  }
  useEffect(() => {
    getproductData(sid)
  }, [])
  const display = (
    <>
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">產品名稱</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
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
            placeholder="name@example.com"
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
            placeholder="name@example.com"
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
            placeholder="name@example.com"
            value={detail}
            onChange={(e) => {
              setDetial(e.target.value)
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput5">圖片路徑 </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput5"
            placeholder="name@example.com"
            value={imgurl}
            onChange={(e) => {
              setImgUrl(e.target.value)
            }}
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlSelect1">產品分類</label>
          <select
            value={category}
            onChange={changeCategory}
            class="form-control"
            id="exampleFormControlSelect1"
          >
            <option value="0">身體清潔</option>
            <option value="1">臉部保養</option>
            <option value="2">頭髮護理</option>
            <option value="3">彩妝</option>
          </select>
        </div>
      </form>
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => {
          updateData()
        }}
      >
        送出
      </button>
    </>
  )
  return <>{display}</>
}
export default withRouter(ProductEdit)
