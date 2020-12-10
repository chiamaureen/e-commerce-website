import React, { useState, useEffect } from 'react'

function CartListTable(props) {
  const [mycart, setMycart] = useState([])
  const [mycartDisplay, setMycartDisplay] = useState([])

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

  return (
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
}

export default CartListTable
