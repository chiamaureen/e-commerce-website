import React from 'react'
import '../member.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from 'react-bootstrap'
import AboutMe from './AboutMe'
import Order from './Order'
import Refund from './Refund'
import Level from './Level'
import Follow from './Follow'
import Coupon from './Coupon'
import AccountSetting from './AccountSetting'

function MemberNav() {
  return (
    <>
      <div className="member_navbar">
        <h4 style={{ color: '#99cb77', fontSize: '20px' }}>會員專區</h4>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link as={NavLink} to="/memberroot/aboutme" exact>
            關於我
          </Nav.Link>
          <Nav.Link as={NavLink} to="/memberroot/order">
            購買訂單
          </Nav.Link>
          <Nav.Link as={NavLink} to="/memberroot/refund">
            退款申請
          </Nav.Link>
          <Nav.Link as={NavLink} to="/memberroot/level">
            等級權益
          </Nav.Link>
          <Nav.Link as={NavLink} to="/memberroot/follow">
            追蹤商品
          </Nav.Link>
          <Nav.Link as={NavLink} to="/memberroot/coupon">
            優惠券
          </Nav.Link>
          <Nav.Link as={NavLink} to="/memberroot/setting">
            帳號設定
          </Nav.Link>
          <Nav.Link as={NavLink} to="#">
            幫助
          </Nav.Link>
        </Nav>
      </div>

      <Switch>
        <Route path="/memberroot/aboutme">
          <AboutMe />
        </Route>
        <Route path="/memberroot/order">
          <Order />
        </Route>
        <Route path="/memberroot/refund">
          <Refund />
        </Route>
        <Route path="/memberroot/level">
          <Level />
        </Route>
        <Route path="/memberroot/follow">
          <Follow />
        </Route>
        <Route path="/memberroot/coupon">
          <Coupon />
        </Route>
        <Route path="/memberroot/setting">
          <AccountSetting />
        </Route>
      </Switch>
    </>
  )
}

export default MemberNav
