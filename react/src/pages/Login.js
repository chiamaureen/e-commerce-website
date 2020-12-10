import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import '../member/member.css'

import TWZipCode from '../member/mcomponents/TWZipCode'

function MemberLoginModal(props) {
  //modal的顯示
  const { isAuth, setisAuth, loginModalShow, setLoginModalShow } = props

  //會員登入的hook
  const [memberLoginEmail, setMemberLoginEmail] = useState('')
  const [memberLoginPwd, setMemberLoginPwd] = useState('')

  //登入切換密碼input的type
  function pwdCheck() {
    const loginPwd = document.querySelector('#loginPwd')
    if (loginPwd.type === 'password') {
      loginPwd.type = 'text'
    } else {
      loginPwd.type = 'password'
    }
  }
  //註冊切換密碼input的type
  function registerPwdCheck() {
    const registerPwd = document.querySelector('#registerPwd')
    if (registerPwd.type === 'password') {
      registerPwd.type = 'text'
    } else {
      registerPwd.type = 'password'
    }
  }

  //email的判斷
  const email_pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i

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
      email: memberLoginEmail,
      pwd: memberLoginPwd,
    }
    fetch('http://localhost:3000/member/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        // console.log(res.json())
        return res.json()
      })
      .then((row) => {
        console.log(row)
        const memberLoginId = JSON.stringify(row)
        localStorage.setItem('memberLogInInfo', memberLoginId)
        console.log('row')
        if (localStorage.getItem('memberLogInInfo') !== '') {
          alert('登入成功！')
          setisAuth(true)
          setLoginModalShow(false)
          props.history.push('/memberroot/aboutme')
          setMemberLoginEmail('')
          setMemberLoginPwd('')
        }
      })
      .catch((error) => {
        console.log('錯誤')
      })
  }

  //會員註冊的hook
  const [registerName, setRegisterName] = useState('')
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPwd, setRegisterPwd] = useState('')
  const [registerGender, setRegisterGender] = useState(0)
  const [registerBirth, setRegisterBirth] = useState('')

  //地址
  const [country, setCountry] = useState(-1)
  const [township, setTownship] = useState(-1)
  //郵遞區號
  const [postcode, setPostcode] = useState('')

  const [countryDb, setCountryDb] = useState('')
  const [townshipDb, setTownshipDb] = useState('')
  const [addressStringDb, setAddressStringDb] = useState('')

  //按下modal裡的「註冊」觸發的function
  function RegisterSubmit() {
    const registerError = document.querySelector('#registerError')

    const data = {
      name: registerName,
      email: registerEmail,
      pwd: registerPwd,
      gender: registerGender,
      birth: registerBirth,
      level: '1',
      avatar: '',
      addressCode: postcode,
      addressString: addressStringDb,
    }
    if (registerGender === 0) {
      registerError.innerHTML = '請選擇性別'
    } else if (postcode === 0) {
      registerError.innerHTML = '請選擇地區'
    } else if (addressStringDb === '') {
      registerError.innerHTML = '請填寫地址'
    } else if (!email_pattern.test(registerEmail)) {
      registerError.innerHTML = '請填寫正確格式的電子郵件'
    } else {
      fetch('http://localhost:3000/member/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          //console.log(res.json())
          registerError.innerHTML = '註冊成功'
          return res.json()
        })
        .then((row) => {
          console.log(row)
          const insertId = row.id
          const a = JSON.stringify({ id: insertId })
          localStorage.setItem('memberLogInInfo', a)
          if (localStorage.getItem('memberLogInInfo') !== '') {
            alert('註冊成功！')
            setisAuth(true)
            setLoginModalShow(false)
            props.history.push('/memberroot/aboutme')
          }
        })
    }
  }

  //登入或註冊的狀態
  const [loginOrRegister, setLoginOrRegister] = useState(true)

  //modal onHide的function
  function modalOnHide() {
    setLoginModalShow(false)
    setLoginOrRegister(true)
    setRegisterName('')
    setRegisterEmail('')
    setRegisterPwd('')
    setRegisterGender('')
    setRegisterBirth('')
    setMemberLoginEmail('')
    setMemberLoginPwd('')
    setCountry(-1)
    setTownship(-1)
  }

  //登入登出btn狀態function
  function loginBtnCtrl() {
    if (!isAuth) {
      setLoginModalShow(true)
    } else {
      setLoginModalShow(false)
      setisAuth(false)
      localStorage.removeItem('memberLogInInfo')
      props.history.push('')
    }
  }

  //快速輸入-LOGIN
  function fastLoginFunction(){
    setMemberLoginEmail('bunny@yahoo.com.tw')
    setMemberLoginPwd('111')
  }

  //快速輸入-REGISTER
  function fastRegisterFunction(){
    setRegisterName('Adrian')
    setRegisterEmail('adrian@gmail.com')
    setRegisterPwd('123')
    setRegisterGender('1')
    setRegisterBirth('1998-02-14')
    setCountry(1)
    setTownship(4)
    setAddressStringDb('復興南路一段390號2樓')
    setPostcode(106)
  }

  //登入
  const loginOrRegisterTrue = (
    <>
      <Modal.Header closeButton>
        <Modal.Title>會員登入</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
        <div className="form-group">
        <input type="checkbox" id="fastinput" onClick={fastLoginFunction}/>
        <label className="form-check-label" htmlFor="fastinput">
          快速輸入
        </label>
        </div>
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
              onClick={pwdCheck}
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
        <p
          className="register_info"
          onClick={() => {
            setLoginOrRegister(false)
          }}
        >
          還沒有帳號嗎？點我註冊
        </p>
        <button className="login-btn" onClick={loginInfoSubmit}>
          {isAuth ? '登出' : '登入'}
        </button>
      </Modal.Footer>
    </>
  )

  //註冊
  const loginOrRegisterFalse = (
    <>
      <Modal.Header closeButton>
        <Modal.Title>會員註冊</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
        <div className="form-group">
        <input type="checkbox" id="fastregister" onClick={fastRegisterFunction}/>
        <label className="form-check-label" htmlFor="fastregister">
          快速輸入
        </label>
        </div>
          <div className="form-group">
            <label htmlFor="registerName">顯示暱稱</label>
            <input
              type="text"
              className="form-con"
              id="registerName"
              placeholder="請輸入暱稱"
              value={registerName}
              onChange={(e) => {
                const newRegisterName = e.target.value
                setRegisterName(newRegisterName)
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="registerEmail">電子郵件</label>
            <input
              type="email"
              className="form-con"
              id="registerEmail"
              aria-describedby="emailHelp"
              placeholder="請輸入電子郵件"
              value={registerEmail}
              onChange={(e) => {
                const newRegisterEmail = e.target.value
                setRegisterEmail(newRegisterEmail)
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="registerPwd">密碼</label>
            <input
              type="password"
              className="form-con"
              id="registerPwd"
              placeholder="請輸入密碼"
              value={registerPwd}
              onChange={(e) => {
                const newRegisterPwd = e.target.value
                setRegisterPwd(newRegisterPwd)
              }}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="registerpwdCheckInput"
              onClick={registerPwdCheck}
            />
            <label className="form-check-label" htmlFor="registerpwdCheckInput">
              顯示密碼
            </label>
            <small
              id="registersmallinfo"
              className="form-text text-muted"
            ></small>
          </div>
          <div className="form-group">
            <label htmlFor="registerGender">性別</label>
            <select
              className="form-con"
              id="registerGender"
              value={registerGender}
              onChange={(e) => {
                const newRegisterGender = e.target.value
                if (newRegisterGender !== 0) {
                  setRegisterGender(newRegisterGender)
                }
              }}
            >
              <option value="0">請選擇</option>
              <option value="1">男</option>
              <option value="2">女</option>
              <option value="3">其他</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="registerBirth">生日</label>
            <br />
            <input
              className="form-con"
              id="registerBirth"
              type="date"
              value={registerBirth}
              onChange={(e) => {
                const newRegisterBirth = e.target.value
                setRegisterBirth(newRegisterBirth)
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address1">地址</label>
            <TWZipCode
              country={country}
              setCountry={setCountry}
              township={township}
              setTownship={setTownship}
              postcode={postcode}
              setPostcode={setPostcode}
              countryDb={countryDb}
              setCountryDb={setCountryDb}
              townshipDb={townshipDb}
              setTownshipDb={setTownshipDb}
              addressStringDb={addressStringDb}
              setAddressStringDb={setAddressStringDb}
            />
          </div>
          <p id="registerError"></p>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <p
          className="register_info"
          onClick={() => {
            setLoginOrRegister(true)
          }}
        >
          已經有帳號嗎？點我登入
        </p>
        <button onClick={RegisterSubmit} className="login-btn">
          註冊
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
      {loginOrRegister ? loginOrRegisterTrue : loginOrRegisterFalse}
    </Modal>
  )

  const loginBtn = (
    <button className="login-btn" onClick={loginBtnCtrl}  style={{width:"100%"}}>
      {isAuth ? '登出' : '登入'}
    </button>
  )

  return (
    <>
      {loginBtn}
      {MemberLoginModal}
    </>
  )
}

export default withRouter(MemberLoginModal)
