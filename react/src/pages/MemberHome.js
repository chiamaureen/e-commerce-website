import React, { useState, useEffect } from 'react'
import { Link, Switch, withRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Login from './Login'
import Register from './Register'

function MemberHome(props) {
  // const [loginModalShow, setLoginModalShow] = useState(false);
  // const [registerModalShow, setRegisterModalShow] = useState(false);

  return (
    <>
      <div className="mt-5">
        <h1>Hello</h1>
        {/* <Link to="/memberroot">Link component to memberroot</Link>
      <Login
        loginModalShow={loginModalShow}
        setLoginModalShow={setLoginModalShow}
      />
      <Register
        registerModalShow={registerModalShow}
        setRegisterModalShow={setRegisterModalShow}
      /> */}
      </div>
    </>
  )
}

export default withRouter(MemberHome)
