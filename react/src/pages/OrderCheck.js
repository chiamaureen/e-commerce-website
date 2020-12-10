import React, { useState, useEffect } from 'react'
import bootstrap from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navebar'
import Footer from '../components/Footer'
import OrderListCard from '../components/cart/OrderListCard'
import PaymentInfoBtn from '../components/cart/PaymentInfoBtn'
import CheckoutBtn from '../components/cart/CheckoutBtn'

import '../../node_modules/bootstrap/scss/bootstrap.scss'
import '../styles/cart/cart.css'

function OrderCheck(props) {
  const [isDroped, setIsDroped] = useState(false)
  const [tableShowed, setTableShowed] = useState(null)
  const [mycart, setMycart] = useState([])
  const [mycartDisplay, setMycartDisplay] = useState([])
  const [myTotal, setMyTotal] = useState([])
  const [price, setPrice] = useState(0)
  const [amount, setAmount] = useState(0)

  function getCartFromLocalStorage() {
    const newCart = localStorage.getItem('cart') || '[]'

    console.log(JSON.parse(newCart))

    setMycart(JSON.parse(newCart))
  }

  useEffect(() => {
    getCartFromLocalStorage()
  }, [])

  // componentDidUpdate
  useEffect(() => {
    // mycartDisplay運算
    let newMycartDisplay = []

    //尋找mycartDisplay
    for (let i = 0; i < mycart.length; i++) {
      //尋找mycartDisplay中有沒有此mycart[i].id
      //有找到會返回陣列成員的索引值
      //沒找到會返回-1
      const index = newMycartDisplay.findIndex(
        (value) => value.sid === mycart[i].sid
      )
      //有的話就數量+1
      if (index !== -1) {
        //每次只有加1個數量
        //newMycartDisplay[index].amount++
        //假設是加數量的
        newMycartDisplay[index].amount += mycart[i].amount
      } else {
        //沒有的話就把項目加入，數量為1
        const newItem = { ...mycart[i] }
        newMycartDisplay = [...newMycartDisplay, newItem]
      }
    }

    console.log(newMycartDisplay)
    setMycartDisplay(newMycartDisplay)
  }, [mycart])

  function getTotalFromLocalStorage() {
    const newTotal = localStorage.getItem('mytotal') || '[]'

    console.log(JSON.parse(newTotal))

    setMyTotal(JSON.parse(newTotal))
  }

  useEffect(() => {
    getTotalFromLocalStorage()
  }, [])

  function spinTheArrow(event) {
    const arrow = document.querySelector('#cart-dropdown-arrow')

    if (isDroped === true) {
      arrow.style.transform = 'rotate(0deg)'

      const newTableShowed = null
      setTableShowed(newTableShowed)
    } else {
      arrow.style.transform = 'rotate(180deg)'
      const newTableShowed = display
      setTableShowed(newTableShowed)
    }
    setIsDroped((prevIsDroped) => !prevIsDroped)
  }

  const display = (
    <>
      <div className="row col-12 px-0">
        <div className="cart cart-item">
          <table>
            <thead>
              <tr>
                <th>商品名稱</th>
                <th>優惠</th>
                <th>單價</th>
                <th>數量</th>
                <th>小計</th>
              </tr>
            </thead>
            <tbody>
              {mycartDisplay.map((item, index) => {
                return (
                  <tr>
                    <td>
                      <img src={item.picture} alt="" />
                      &emsp;<span>{item.name}</span>
                    </td>
                    <td>
                      <span>無</span>
                    </td>
                    <td>
                      <span>NT$ {item.price}</span>
                    </td>
                    <td className="amount">
                      <div className="amount-box">
                        <span>{item.amount}</span>
                      </div>
                    </td>
                    <td>
                      <span>NT$ {item.amount * item.price}</span>
                    </td>
                  </tr>
                )
              })}
              <tr className="table-text">
                <td>
                  已享用之優惠
                  <br />
                  <div className="discount-box">
                    <span>優惠促銷</span>
                  </div>
                  &ensp;<span>全站滿 600 元，即享免運優惠</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
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
    Member_name: 'Bunny',
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

  // const addOrder = async () => {
  //   await fetch('http://localhost:3000/api/order', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'applications/json',
  //     },
  //     body: encodeURI(JSON.stringify(order)),
  //   })
  //     .then((res) => {
  //       res.json({ a: 'a' })
  //     })
  //     .then((result) => {
  //       console.log(result)
  //     })
  // }

  return (
    <>
      <div className="container">
        <div classNameName="row justify-content-center">
          <div className="step-wrap">
            <img src="./images/step3.png" alt="" />
          </div>
        </div>

        <div className="row col-12 px-0 justify-content-center">
          <div className="cart-list w-100 mb-3">
            <div className="total-wrap">合計：NT$ {price}</div>
            <div className="cart-dropdown d-flex justify-content-center align-items-center">
              購物車：{amount}件 &ensp;
              <Link
                onClick={() => {
                  spinTheArrow()
                }}
              >
                <img
                  className=""
                  id="cart-dropdown-arrow"
                  src="./images/expand-button.svg"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
        {tableShowed}
        <OrderListCard price={price} amount={amount} />
        <div className="row col-12 mb-5 justify-content-between">
          <Link to="/payment-info">
            <PaymentInfoBtn />
          </Link>
          <Link to="/order-done">
            <CheckoutBtn
            // onClick={() => {
            //   addOrder()
            // }}
            />
          </Link>
        </div>
      </div>
    </>
  )
}

export default OrderCheck
