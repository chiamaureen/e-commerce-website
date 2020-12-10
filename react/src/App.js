import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Navbar from './components/Navebar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
//首頁
import Home from './pages/Home'
//原商品
import Product from './pages/Product'
//member
import MemberMain from './member/mcomponents/MemberMain'
import MemberHome from './pages/MemberHome'
import MemberRoot from './pages/MemberRoot'
//article
import ArticleList from './pages/ArticleList'
import ArticleDetail from './pages/ArticleDetail'
//product
import ProductList from './pages/ProductList'
import ShopList from './pages/ShopList'
// import ProductData from './components/seller_back/pages/ProductData'
// import ProductAdd from './components/seller_back/pages/ProductAdd'
// import ProductEdit from './components/seller_back/pages/ProductEdit'
//活動
import CourseList from './pages/CourseList'
import CourseDetail from './pages/CourseDetail'
import CourseSubmit from './pages/CourseSubmit'
//購物車
import Cart from './pages/Cart'
import PaymentInfo from './pages/PaymentInfo'
import OrderCheck from './pages/OrderCheck'
import OrderDone from './pages/OrderDone'
import { Container } from 'react-bootstrap'
//後台
import SellerBack from './components/seller_back/pages/SellerBack'

function App() {
  //設定登入登出的狀態
  const [isAuth, setisAuth] = useState()

  // const [cartItems, setCartItems] = useState(0)
  // const [ok, setok] = useState(false)

  useEffect(() => {
    const memberAuth = localStorage.getItem('memberLogInInfo')
  if(memberAuth === null ){
    setisAuth(false)
  }else{
    setisAuth(true)
  }
  }, [])

  // useEffect(() => {
  //   const cartItemsLS = JSON.parse(localStorage.getItem('cart'))
  //   if (cartItemsLS === null) {
  //     setCartItems(0)
  //     setok(!ok)
  //   } else {
  //     setCartItems(cartItemsLS.length)
  //     setok(!ok)
  //   }
  // }, [ok])

  return (
    <Router>
      <>
        <Switch>
          <Route path="/SellerBack">
            <SellerBack />
          </Route>
        </Switch>
        <Navbar isAuth={isAuth} setisAuth={setisAuth} />
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/product">
              <Product isAuth={isAuth} />
            </Route>
            <Route path="/ProductList">
              <ProductList isAuth={isAuth} />
            </Route>
            <Route path="/ShopList/:category?/:sid?/">
              <ShopList isAuth={isAuth} />
            </Route>
            {/* <Route path="/ProductData/:sid?">
              <ProductData />
            </Route>
            <Route path="/ProductAdd">
              <ProductAdd />
            </Route>
            <Route path="/ProductEdit/:sid?">
              <ProductEdit />
            </Route> */}
            <Route path="/articleList">
              <ArticleList />
            </Route>
            <Route path="/ArticleDetail">
              <ArticleDetail />
            </Route>
            <Route path="/CourseList">
              <CourseList />
            </Route>
            <Route path="/CourseDetail/:id?">
              <CourseDetail />
            </Route>
            <Route path="/CourseSubmit/form">
              <CourseSubmit />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/payment-info">
              <PaymentInfo />
            </Route>
            <Route path="/order-check">
              <OrderCheck />
            </Route>
            <Route path="/order-done">
              <OrderDone />
            </Route>
            <MemberMain>
              {/* <Route path="/">
                <MemberHome />
              </Route> */}
              <Route path="/memberroot">
                <MemberRoot />
              </Route>
            </MemberMain>
          </Switch>
        </ScrollToTop>
        <Footer />
      </>
    </Router>
  )
}

export default App
