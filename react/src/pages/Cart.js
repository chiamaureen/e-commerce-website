import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import bootstrap from 'react-bootstrap'

import CartContent from '../components/cart/CartContent'
import BackToShopBtn from '../components/cart/BackToShopBtn'
import PaymentInfoBtn from '../components/cart/PaymentInfoBtn'

import '../../node_modules/bootstrap/scss/bootstrap.scss'
import '../styles/cart/cart.css'

function Cart(props) {
  return (
    <>
      <div className="container">
        <div classNameName="row justify-content-center">
          <div className="step-wrap">
            <img src="./images/step1.png" alt="" />
          </div>
        </div>
        <CartContent />
        <div className="row col-12 pr-0 mb-5">
          <Link to="/ShopList">
            <BackToShopBtn />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Cart
