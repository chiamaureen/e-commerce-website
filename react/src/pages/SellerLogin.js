import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import '../styles/Sellerlogin.css'

function SellerLogin(props) {
  const { isAuth, setisAuth, loginModalShow, setLoginModalShow } = props

  const [memberLoginEmail, setMemberLoginEmail] = useState('')
  const [memberLoginPwd, setMemberLoginPwd] = useState('')

  //按下modal裡的「登入」觸發的function
  function loginInfoSubmit() {
    let loginInfo = document.querySelector('#loginInfo')
    if (memberLoginEmail === '') {
      loginInfo.innerHTML = '請輸入電子郵件'
    }
    if (memberLoginPwd === '') {
      loginInfo.innerHTML = '請輸入密碼'
    }
    const data = {
      account: memberLoginEmail,
      password: memberLoginPwd,
    }
    fetch('http://localhost:3000/seller/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res)
        return res.json()
      })
      .then((row) => {
        console.log(row[0])
        const memberLoginId = JSON.stringify(row)
        localStorage.setItem('row', row)
        if (localStorage.getItem('row') !== '') {
          alert('登入成功！')
          // setisAuth(true)
          setLoginModalShow(false)
          const w = window.open('http://localhost:3002/seller/mainpage')
          props.history.w.push('http://localhost:3002/seller/mainpage')
          setMemberLoginEmail('')
          setMemberLoginPwd('')
        } else {
          alert('帳號密碼錯誤！')
        }
      })
      .catch((error) => {
        alert('登入失敗！')
      })
  }

  const [loginOrRegister, setLoginOrRegister] = useState(true)

  function modalOnHide() {
    setLoginModalShow(false)
    setLoginOrRegister(true)
    setMemberLoginEmail('')
    setMemberLoginPwd('')
  }

  //登入登出btn狀態function
  function loginBtnCtrl() {
    if (!isAuth) {
      setLoginModalShow(true)
    } else {
      setLoginModalShow(false)
      setisAuth(false)
    }
  }

  //登入
  const loginOrRegisterTrue = (
    <>
      <Modal.Header closeButton>
        <Modal.Title>廠商登入</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label htmlFor="loginEmail">電子郵件</label>
            <input
              type="email"
              className="form-con"
              id="loginEmail"
              aria-describedby="emailHelp"
              placeholder="請輸入電子郵件"
              value={memberLoginEmail}
              onChange={(e) => {
                const newMeberLoginEmail = e.target.value
                setMemberLoginEmail(newMeberLoginEmail)
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="loginPwd">密碼</label>
            <input
              type="password"
              className="form-con"
              id="loginPwd"
              placeholder="請輸入密碼"
              value={memberLoginPwd}
              onChange={(e) => {
                const newMeberLoginPwd = e.target.value
                setMemberLoginPwd(newMeberLoginPwd)
              }}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="loginpwdCheck"
              //   onClick={pwdCheck}
            />
            <label className="form-check-label" htmlFor="loginpwdCheck">
              顯示密碼
            </label>
            <small id="loginsmallinfo" className="form-text text-muted"></small>
          </div>
          <p id="loginInfo"></p>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button className="sellerlogin-btn" onClick={loginInfoSubmit}>
          {isAuth ? '廠商登出' : '廠商登入'}
        </button>
      </Modal.Footer>
    </>
  )

  const MemberLoginModal = (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={loginModalShow}
      onHide={modalOnHide}
    >
      {loginOrRegister ? loginOrRegisterTrue : []}
    </Modal>
  )

  const loginBtn = (
    <button className="sellerlogin-btn" onClick={loginBtnCtrl}>
      {isAuth ? '廠商登出' : '廠商登入'}
      {/* 登入 */}
    </button>
  )

  return (
    <>
      {loginBtn}
      {MemberLoginModal}
    </>
  )
}

export default withRouter(SellerLogin)
