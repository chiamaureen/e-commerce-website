import React, { useState, useEffect } from 'react'
function ProductAdd() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [Specialoffer, setSpecialoffer] = useState('')
  const [detail, setDetial] = useState('')
  const [imgurl, setImgUrl] = useState('')
  const [category, setCategory] = useState('')

  //為何要拉出來寫 才可以正常跑
  const changeCategory = (e) => {
    setCategory(e.target.value)
  }
  const AddProduct = async () => {
    const newData = {
      name,
      price,
      Specialoffer,
      detail,
      imgurl,
      category,
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
export default ProductAdd
// const express = require('express')
// const app = express()
// const db = require(__dirname + '/database')
// const cors = require('cors')
// const bodyParser = require('body-parser')
// const jsonParser = bodyParser.json()
// const multer = require('multer')
// const upload = multer({ dest: __dirname + '../tmp_upload' })
// const fs = require('fs')
// app.use(express.static('public'))
// app.use(cors())
// app.post('/get-db', jsonParser, async (req, res) => {
//   let orderBy = ''
//   let sql = ''
//   switch (parseInt(req.body.Options)) {
//     default:
//     case 0:
//       orderBy = ' ORDER BY price '
//       break
//     case 1:
//       orderBy = ' ORDER BY price DESC '
//       break
//     case 2:
//       orderBy = ' ORDER BY Selling  '
//       break
//     case 3:
//       orderBy = ' ORDER BY Selling DESC '
//       break
//   }
//   sql = 'SELECT * FROM `product` ' + orderBy
//   if (req.body.inputSearch) {
//     sql =
//       'SELECT * FROM `product` WHERE `name` LIKE ' +
//       `'%${req.body.inputSearch}%'`
//   }
//   //解構付值
//   const [results] = await db.query(sql)
//   console.log(results)

//   res.json(results)
// })
// app.get('/ProductData', async (req, res) => {
//   let sql = 'SELECT * FROM product '
//   const [results] = await db.query(sql)

//   res.json(results)
// })
// app.post('/addProduct', jsonParser, async (req, res) => {
//   const data = { ...req.body }
//   let sql = 'INSERT INTO `product` set ?'
//   await db.query(sql, [data])
//   // res.json({
//   //   success: !!affectedRows,
//   //   affectedRows,
//   //   insertId,
//   // });
//   console.log(req.body)
//   res.json('ok')
// })

// // app.get("/get-db", (req, res) => {
// //   db.query("SELECT * FROM product ").then(([results]) => {
// //     res.json(results);
// //   });
// // });

// app.use((req, res) => {
//   res.type('text/plain')
//   res.status(404)ya
//   res.send('404 - 找不到網頁')
// })
// app.listen(3000, function () {
//   console.log('啟動 server 偵聽埠號 3000')
// })
