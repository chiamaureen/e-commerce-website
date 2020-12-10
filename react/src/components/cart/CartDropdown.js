import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function CartDropdown(props) {
  const [isDroped, setIsDroped] = useState(false)
  const [myTotal, setMyTotal] = useState([])

  function getTotalFromLocalStorage() {
    const newMyTotal = localStorage.getItem('total')

    console.log(newMyTotal)

    setMyTotal(JSON.parse(myTotal))
  }

  useEffect(() => {
    getTotalFromLocalStorage()
  }, [])

  function spinTheArrow(isDroped) {
    const arrow = document.querySelector('#cart-dropdown-arrow')

    if (isDroped === true) {
      // arrow.style.transform = 'rotate(0deg)'
      setIsDroped((prevIsDroped) => !prevIsDroped)
    } else {
      arrow.style.transform = 'rotate(180deg)'
      setIsDroped((prevIsDroped) => !prevIsDroped)
    }
  }

  return (
    <>
      <div className="row col-12 px-0 justify-content-center">
        <div className="cart-list w-100 mb-3">
          <div className="total-wrap">合計：NT$ {myTotal.totalPrice}</div>
          <div className="cart-dropdown d-flex justify-content-center align-items-center">
            購物車：{myTotal.totalAmouunt}件 &ensp;
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
    </>
  )
}
export default CartDropdown
