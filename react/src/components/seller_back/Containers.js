import React, { useState } from 'react'
import Avajpg from '../../image/321959.jpg'
import Logo from '../../image/55.svg'
// import Menu from './SidebarBox/Menu'

import { Route, Switch } from 'react-router-dom'
import MenuUI from './SidebarBox/MenuUI'

import './pages/Style/AllSeller.scss'
//引入個別內容頁的component
import MainPage from './pages/MainPage'
import Order from './pages/Order'
import OrderEdit from './pages/OrderEdit'
import Class from './pages/Class'
import Login from './pages/SellerLogin'
import ProductAdd from './pages/ProductAdd'
import ProductData from './pages/ProductData'
import ProductEdit from './pages/ProductEdit'
import ClassAdd from './pages/ClassAdd'
import ClassData from './pages/ClassData'
import ClassEdit from './pages/ClassEdit'

import '../../styles/variable.scss'

function Containers(props) {
  const [loginModalShow, setLoginModalShow] = useState(false)
  const { setisAuth, isAuth } = props

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-2 col-lg-3 col-md-4 sidebar">
            <span className="navbar-brand text-white d-block mx-auto text-center py-3 mb-4 bottom-border">
              <img alt="" height="60" width="150" src={Logo} />
            </span>
            <div className="bottom-border pb-3 flex-column text-center">
              <div className="mb-3">
                <img
                  alt=""
                  src={Avajpg}
                  height="70"
                  width="70"
                  className="rounded-circle mr-3"
                />
              </div>
              <span className="text-white mr-2 mt-3">William Chou</span>
              <Login
                loginModalShow={loginModalShow}
                setLoginModalShow={setLoginModalShow}
                setisAuth={setisAuth}
                isAuth={isAuth}
              />
            </div>
            {/* <Menu/>    */}
            <MenuUI />
          </div>
          <div className="col-xl-10 col-lg-9 col-md-8 main-style-chin">
            <Switch>
              <Route path="/SellerBack">
                <MainPage />
              </Route>
              <Route path="/MainPage">
                <MainPage />
              </Route>
              <Route path="/Order">
                <Order />
              </Route>
              <Route path="/order-edit/:Order_id">
                <OrderEdit />
              </Route>
              <Route path="/Class">
                <Class />
              </Route>
              <Route path="/ProductAdd/:sid?">
                <ProductAdd />
              </Route>
              <Route path="/ProductData/:sid?">
                <ProductData />
              </Route>
              <Route path="/ProductEdit/:sid?">
                <ProductEdit />
              </Route>
              <Route path="/ClassData/:sid?">
                <ClassData />
              </Route>
              <Route path="/ClassAdd/:sid?">
                <ClassAdd />
              </Route>
              <Route path="/ClassEdit/:sid?">
                <ClassEdit />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  )
}

export default Containers
