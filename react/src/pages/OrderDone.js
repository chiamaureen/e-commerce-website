import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import OrderListCard from '../components/cart/OrderListCard'
import BackToShopBtn from '../components/cart/BackToShopBtn'

function OrderDone(props) {
  const [myTotal, setMyTotal] = useState([])
  const [price, setPrice] = useState(0)
  const [amount, setAmount] = useState(0)

  function getTotalFromLocalStorage() {
    const newTotal = localStorage.getItem('mytotal') || '[]'

    console.log(JSON.parse(newTotal))

    setMyTotal(JSON.parse(newTotal))
  }

  useEffect(() => {
    getTotalFromLocalStorage()
  }, [])

  useEffect(() => {
    const newPrice = myTotal[1]

    setPrice(newPrice)
  })

  useEffect(() => {
    const newAmount = myTotal[0]

    setAmount(newAmount)
  })

  const order = {
    Order_State: 2,
    Order_code: '20043UUSCCKK',
    Member_id: 1,
    Menber_name: 'Bunny',
    Order_name: 'Bunny',
    Order_mobile: '0912345678',
    Order_deliver_type: 'e',
    Order_deliver_store: null,
    Order_package_id: 'SALT00002',
    Order_address: '台北市大安區忠孝東路四段45號',
    Order_pay: 'e20',
    Order_CreatedTime: null,
    Order_Amount: amount,
    Order_TotalPrice: price,
  }
  //寫入出現問題，優先解決
  const addOrder = async (req, res) => {
    await fetch('http://localhost:3000/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'applications/json',
      },
      body: encodeURI(JSON.stringify(order)),
    })
    await ((res) => {
      res.json()
    })
    await ((result) => {
      console.log(result)
    })
  }

  // useEffect(() => {
  //   addOrder()
  // })

  return (
    <>
      <div className="container">
        <div className="row justify-content-center my-5">
          <h3>感謝您的購買！</h3>
        </div>
        <OrderListCard price={price} amount={amount} />
        <div className="row col-12 mb-5 justify-content-center">
          <Link to="/ShopList">
            <BackToShopBtn
              onClick={() => {
                localStorage.removeItem('cart')
              }}
            />
          </Link>
        </div>
      </div>
    </>
  )
}
export default OrderDone
