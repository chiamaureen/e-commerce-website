import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import '../../../styles/login.css'

function OrderEdit(props) {
  const order_id = props.match.params.order_id

  // const [user, setUser] = useState({})
  const [dataLoading, setDataLoading] = useState(false)
  const [Mydata, setMydata] = useState('')
  const [member_name, setMember_name] = useState('')
  const [order_totalprice, setOrder_TotalPrice] = useState('')
  const [order_createdtime, setOrder_CreatedTime] = useState('')
  const [shippingmethods, setShippingMethods] = useState('')
  const [status, setStatus] = useState('')
  // let fd = null
  const [userDataIsExist, setUserDataIsExist] = useState(true)
  // useEffect(()=>{fd= new FormData(document.form1)},[])
  async function getUserFromServer(order_id) {
    // 開啟載入指示
    setDataLoading(true)

    // 連接的伺服器資料網址
    const url = 'http://localhost:3000/seller/get-db/' + order_id

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    // console.log(data)
    //要詢問老師為甚麼一定要加data[0]才讀到資料
    setMember_name(data[0].Customer)
    setOrder_TotalPrice(data[0].Amount)
    setOrder_CreatedTime(data[0].Time)
    setShippingMethods(data[0].ShippingMethods)
    setStatus(data[0].Status)

    // 如果從伺服器回傳的資料沒有id值
    if (!data.order_id) {
      setUserDataIsExist(false)
      return
    }

    setMember_name(data.member_name)
    setOrder_TotalPrice(data.order_totalprice)
    setOrder_CreatedTime(data.order_createdtime)
    setShippingMethods(data.shippingmethods)
    setStatus(data.status)
  }

  async function updateUserToSever() {
    // 開啟載入指示
    setDataLoading(true)

    const newData = {
      member_name,
      order_totalprice,
      order_createdtime,
      shippingmethods,
      status,
    }

    // 連接的伺服器資料網址
    const url = 'http://localhost:3000/seller/get-db/:order_id'

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'PUT',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    // 要等驗証過，再設定資料(簡單的直接設定)

    //直接在一段x秒關掉指示器
    setTimeout(() => {
      setDataLoading(false)
      alert('儲存完成')
    }, 1000)
  }

  // 一開始就會開始載入資料
  useEffect(() => {
    getUserFromServer(order_id)
  }, [])

  // 每次users資料有變動就會X秒後關掉載入指示
  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false)
    }, 1000)
  }, [order_id])

  const sendData = async () => {
    // const fd = new FormData(document.form1);
    const newData = {
      member_name: member_name,
      order_totalprice: order_totalprice,
      order_createdtime: order_createdtime,
      shippingmethods: shippingmethods,
      status: status,
    }
    const fd = JSON.stringify(newData)
    console.log(fd)
    // const fd = new FormData(formData);
    const res = await fetch('http://localhost:3000/seller/edit/' + order_id, {
      method: 'post',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
      }),
      body: fd,
    })

    const data = await res.json()
    setMydata(data)
    console.log(data)
  }

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <>
      <form className="form1">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">姓名</label>
          <input
            name="Customer"
            type="text"
            className="form-control"
            value={member_name}
            onChange={(event) => {
              setMember_name(event.target.value)
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">價格</label>
          <input
            name="Amount"
            type="text"
            className="form-control"
            value={order_totalprice}
            onChange={(event) => {
              setOrder_TotalPrice(event.target.value)
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">日期</label>
          <input
            name="Time"
            type="text"
            className="form-control"
            name-
            value={order_createdtime}
            onChange={(event) => {
              setOrder_CreatedTime(event.target.value)
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">取貨方式</label>
          <input
            name="ShippingMethods"
            type="text"
            className="form-control"
            value={shippingmethods}
            onChange={(event) => {
              setShippingMethods(event.target.value)
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">出貨狀態</label>
          <select
            className="form-control"
            value={status}
            onChange={(event) => {
              setStatus(event.target.value)
            }}
          >
            <option value="0">未出貨</option>
            <option value="1">已出貨</option>
          </select>
        </div>
        <p id="loginInfo"></p>

        <button
          onClick={() => {
            sendData()
          }}
          className="btn btn-primary"
        >
          儲存
        </button>
      </form>
    </>
  )

  return (
    <>
      <h3>訂單編輯</h3>
      <hr />
      {dataLoading ? loading : display}
    </>
  )
}

export default withRouter(OrderEdit)
