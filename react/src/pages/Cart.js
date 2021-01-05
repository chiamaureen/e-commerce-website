import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import bootstrap from 'react-bootstrap'

import CartContent from '../components/cart/CartContent'
import BackToShopBtn from '../components/cart/BackToShopBtn'
import PaymentInfoBtn from '../components/cart/PaymentInfoBtn'

import '../../node_modules/bootstrap/scss/bootstrap.scss'
import '../styles/cart/cart.css'

function Cart(props) {

  const { isAuth,cartItems,setCartItems} = props

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="step-wrap">
            <img src="./images/step1.png" alt="" />
          </div>
        
          <CartContent isAuth={isAuth}  cartItems={cartItems} setCartItems={setCartItems}/>
          <div className="col-12 pr-0 mb-5">
          <Link to="/ShopList">
            <BackToShopBtn />
          </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
