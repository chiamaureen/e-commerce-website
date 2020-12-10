import React, { useState, useEffect } from 'react'
import '../member.css'
import OrderItemTable from './OrderItemTable'

function OdrerInfoDetail(props) {
  //訂單商品的收合狀態
  const [orderDetail, setOrderDetail] = useState(true)

  //訂單商品表
  const [itemTable, setItemTable] = useState([])

  //資料庫裡的資訊
  const {
    Order_code,
    Member_name,
    Order_name,
    Order_mobile,
    Order_deliver_type,
    Order_deliver_store,
    Order_package_id,
    Order_pay,
    Order_Amount,
    Order_TotalPrice,
  } = props

  //判斷取貨方式
  let OrderDeliverType = Order_deliver_type
  switch (OrderDeliverType) {
    case 'a':
      OrderDeliverType = '全家'
      break
    case 'b':
      OrderDeliverType = '7-11'
      break
    case 'c':
      OrderDeliverType = 'ok'
      break
    case 'd':
      OrderDeliverType = '萊爾富'
      break
    case 'e':
      OrderDeliverType = '郵寄'
      break
    default:
      break
  }

  //判斷付款狀態
  let OrderPayState = Order_pay.slice(1, 3)
  switch (OrderPayState) {
    case '10':
      OrderPayState = ' 信用卡尚未付款'
      break
    case '20':
      OrderPayState = ' 信用卡已付款'
      break
    case '30':
      OrderPayState = ' 轉帳尚未付款'
      break
    case '40':
      OrderPayState = ' 轉帳已付款'
      break
    case '50':
      OrderPayState = ' 超商取貨付款'
      break

    default:
      break
  }

  //訂單商品的詳細
  const orderDetailTable = (
    <>
      <div className="row align-items-center">
        <h5 className="col-8">共{Order_Amount}件</h5>
        <h3 className="col-2">${Order_TotalPrice}</h3>
        <button
          className="col-2 order-btn"
          onClick={() => setOrderDetail(true)}
        >
          收合
        </button>
      </div>
      <div className="row order-detail">
        <table className="table table-striped mt-4">
          <thead>
            <tr>
              <th scope="col">商品圖</th>
              <th scope="col">名稱</th>
              <th scope="col">數量</th>
              <th scope="col">價格</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {itemTable.map((item, index) => {
              return (
                <OrderItemTable
                  key={item.OrderDetail_id}
                  Order_Picture={item.Order_Picture}
                  Order_Detail_name={item.Order_Detail_name}
                  Order_Detail_amount={item.Order_Detail_amount}
                  Order_Detail_price={item.Order_Detail_price}
                />
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )

  //展開的btn
  function openBtn() {
    setOrderDetail(false)
    const data = { Order_code: Order_code }
    fetch('http://localhost:3000/member/orderdetail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        //console.log(res.json())
        return res.json()
      })
      .then((row) => {
        console.log(row)
        setItemTable(row)
      })
      .catch((error) => {
        console.log('error')
      })
  }
  const nonOrderDetail = (
    <>
      <div className="row align-items-center">
        <h5 className="col-8">共{Order_Amount}件</h5>
        <h3 className="col-2">${Order_TotalPrice}</h3>
        <button className="col-2 order-btn" onClick={openBtn}>
          展開
        </button>
      </div>
    </>
  )

  //運送方式是郵寄的話才顯示
  const address = (
    <>
      <p className="order-content">
        收貨地址： <span>台北市大安區00路00號0樓</span>
      </p>
    </>
  )

  return (
    <>
      <div>
        <div className="row order-part">
          <p className="order-title">
            訂單編號
            <span className="odrder-code">{Order_code}</span>
          </p>
        </div>
        <div className="order-info">
          <p className="order-s-title">訂單資訊</p>
          <p className="order-content">
            訂購人： <span>{Member_name}</span>
          </p>
          <p className="order-content">
            收件人： <span>{Order_name}</span>
          </p>
          <p className="order-content">
            收件人電話： <span>{Order_mobile}</span>
          </p>
          <hr />
          <p className="order-s-title">運送資訊</p>
          <p className="order-content">
            {OrderDeliverType} {Order_deliver_store}
          </p>
          <p className="order-content">
            包裹查詢號碼： <span>{Order_package_id}</span>
          </p>
          <p className="order-content">
            付款方式： <span>{OrderPayState}</span>
          </p>

          {OrderDeliverType === '郵寄' ? address : ''}
          <hr />

          {orderDetail ? nonOrderDetail : orderDetailTable}
        </div>
      </div>
    </>
  )
}

export default OdrerInfoDetail
