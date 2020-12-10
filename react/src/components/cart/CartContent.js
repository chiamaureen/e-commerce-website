import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import PaymentInfoBtn from './PaymentInfoBtn'

function CartContent(props) {
  const [mycart, setMycart] = useState([])
  const [isEmpty, setIsEmpty] = useState(true)
  const [mycartDisplay, setMycartDisplay] = useState([])
  const [total, setTotal] = useState(0)

  //
  function setCartFromLocalStorage() {
    let cart = [
      {
        sid: 1,
        name: '順其自然卸妝乳',
        price: 350,
        picture: '/images/facial1.jpg',
        amount: 2,
      },
      {
        sid: 5,
        name: '煥然一新晚霜',
        price: 500,
        picture: '/images/facial5.jpg',
        amount: 3,
      },
      {
        sid: 3,
        name: '無負擔精華油',
        price: 500,
        picture: '/images/facial3.jpg',
        amount: 1,
      },
    ]
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  //
  // useEffect(() => {
  //   setCartFromLocalStorage()
  // })

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

  // 更新購物車中的商品數量
  const updateCartToLocalStorage = (item, isAdded = true) => {
    console.log(item, isAdded)
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []

    // find if the product in the localstorage with its id
    const index = currentCart.findIndex((v) => v.sid === item.sid)

    console.log('index', index)
    // found: index! == -1
    if (index > -1) {
      isAdded ? currentCart[index].amount++ : currentCart[index].amount--
    }

    localStorage.setItem('cart', JSON.stringify(currentCart))

    // 設定資料
    setMycart(currentCart)
  }

  //刪除
  const removeCartToLocalStorage = (item) => {
    console.log(item)
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []

    // find if the product in the localstorage with its id
    const index = currentCart.findIndex((v) => v.sid === item.sid)
    const remove = window.confirm('確定將此商品從購物車移除？')

    if (remove) {
      if (index > -1) {
        currentCart.splice(index, 1)
      }
    } else {
    }

    localStorage.setItem('cart', JSON.stringify(currentCart))

    setMycart(currentCart)
  }
  // 計算總價用的函式
  const sum = (items) => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].price
    }
    return total
  }

  const amount = (items) => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount
    }
    return total
  }

  function deliveryDiscount() {
    let sumtotal = sum(mycartDisplay)
    if (sumtotal < 600) {
      return 60
    } else {
      return 0
    }
  }
  useEffect(() => {
    setTotal(sum(mycartDisplay) + deliveryDiscount())
  })

  const setMyTotalToLocalStorage = (item) => {
    let totalAmount = amount(mycartDisplay)
    let totalPrice = total

    let myTotal = [totalAmount, totalPrice]

    localStorage.setItem('mytotal', JSON.stringify(myTotal))
  }

  const display = (
    <>
      <div className="row col-12 px-0">
        <h3 className="cart-title">購物車</h3>
        <div className="cart cart-item">
          <table>
            <thead>
              <tr>
                <th>商品名稱</th>
                <th>優惠</th>
                <th>單價</th>
                <th>數量</th>
                <th>小計</th>
                <th></th>
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
                      <Link
                        onClick={() => {
                          if (item.amount === 1) return
                          updateCartToLocalStorage(item, false)
                        }}
                      >
                        <img
                          className="cart-icon"
                          src="./images/remove_circle_outline.svg"
                          alt=""
                        />
                      </Link>
                      &ensp;
                      <div className="amount-box">
                        <span>{item.amount}</span>
                      </div>
                      &ensp;
                      <Link
                        onClick={() => updateCartToLocalStorage(item, true)}
                      >
                        <img
                          className="cart-icon"
                          src="./images/add_circle_outline.svg"
                          alt=""
                        />
                      </Link>
                    </td>
                    <td>
                      <span>NT$ {item.amount * item.price}</span>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => removeCartToLocalStorage(item)}
                        className="btn del-btn cart-btn"
                      >
                        刪除
                      </button>
                    </td>
                  </tr>
                )
              })}
              <tr className="table-text">
                <td>
                  <label for="discount-code">優惠代碼：</label>
                  <input
                    id="discount-code"
                    name="discount-code"
                    className="discount-code cart-input"
                    type="text"
                  />
                  <br />
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
      <div className="row col-12 px-0">
        <div className="col-8">
          <div className="cart cart-delivery">
            <table>
              <thead>
                <tr>
                  <th>
                    <h3 className="table-title">選擇送貨及付款方式</h3>
                  </th>
                </tr>
              </thead>
            </table>
            <div className="inner">
              <h5>配送方式</h5>
              <div className="radio-wrap d-flex align-items-center">
                <input type="radio" id="home" name="delivery" value="e" />
                <label for="home">宅配</label>
                <input type="radio" id="711" name="delivery" value="a" />
                <label for="711">7-11</label>
                <input type="radio" id="ok" name="delivery" value="b" />
                <label for="ok">OK</label>
                <input type="radio" id="hi" name="delivery" value="c" />
                <label for="hi">萊爾富</label>
                <input type="radio" id="fami" name="delivery" value="d" />
                <label for="fami">全家</label>
                <input
                  type="button"
                  name="store-location"
                  value="選擇門市"
                  className="btn cart-btn store-location"
                />
              </div>
              <h5>付款方式</h5>
              <div className="radio-wrap d-flex align-items-center">
                <input type="radio" id="credit" name="payment" value="10" />
                <label for="credit">信用卡</label>
                <input type="radio" id="ATM" name="payment" value="30" />
                <label for="ATM">ATM轉帳</label>
                <input type="radio" id="getpay" name="payment" value="50" />
                <label for="getpay">超商取貨付款</label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="cart cart-info">
            <table>
              <thead>
                <tr>
                  <th>
                    <h3 className="table-title">訂單資訊</h3>
                  </th>
                </tr>
              </thead>
            </table>
            <div className="inner">
              <div className="d-flex justify-content-between">
                <p>小計：</p>
                <p>{sum(mycartDisplay)}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>運費：</p>
                <p>{deliveryDiscount()}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>優惠：</p>
                <p></p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p>總計：</p>
                <p id="total-price">{total}</p>
              </div>
              <div className="d-flex justify-content-center">
                <Link to="/payment-info">
                  <PaymentInfoBtn onClick={setMyTotalToLocalStorage()} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  const empty = (
    <>
      <div className="row col-12 px-0">
        <h3 className="cart-title">購物車</h3>
        <div className="cart cart-item">
          <table>
            <thead>
              <tr>
                <th>商品名稱</th>
                <th>優惠</th>
                <th>單價</th>
                <th>數量</th>
                <th>小計</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  colspan="6"
                  className="d-flex justify-content-center text-align-center"
                >
                  購物車內尚無商品
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )

  useEffect(() => {
    if (mycartDisplay.length !== 0) {
      setIsEmpty(false)
    }
  })

  useEffect(() => {
    setMyTotalToLocalStorage()
  })
  return isEmpty ? empty : display
}
export default CartContent
