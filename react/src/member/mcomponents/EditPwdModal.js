import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import '../../member/member.css'

function EditPwdModal(props) {
  const localStorageInfo = localStorage.getItem('memberLogInInfo')
  const localStorageId = JSON.parse(localStorageInfo).id

  const {
    modalShow,
    setModalShow,
    memberPwd,
    setMemberPwd,
    memberEditPwd,
    setMemberEditPwd,
    memberEditNew1Pwd,
    setmemberEditNew1Pwd,
    memberEditNew2Pwd,
    setmemberEditNew2Pwd,
  } = props

  function upDatePwdBtn() {
    let errorInfo = document.querySelector('#errorinfo')

    if (memberPwd !== memberEditPwd) {
      errorInfo.innerHTML = '舊密碼輸入錯誤'
    }
    if (memberEditNew1Pwd !== memberEditNew2Pwd) {
      errorInfo.innerHTML = '請再確認一次新密碼'
    }
    if (memberEditPwd === '') {
      if (memberEditNew1Pwd !== memberEditNew2Pwd) {
        errorInfo.innerHTML = '請輸入舊密碼'
      }
    }
    if (memberEditNew1Pwd === '') {
      errorInfo.innerHTML = '請輸入新密碼'
    }
    if (memberEditNew2Pwd === '') {
      errorInfo.innerHTML = '請確認新密碼'
    }
    if (
      memberEditPwd === memberEditNew1Pwd ||
      memberEditPwd === memberEditNew2Pwd
    ) {
      errorInfo.innerHTML = '請輸入新密碼'
    }
    if (memberEditNew1Pwd === '') {
      errorInfo.innerHTML = '請確認新密碼'
    }
    if (
      memberPwd === memberEditPwd &&
      memberEditNew1Pwd === memberEditNew2Pwd
    ) {
      setMemberPwd(memberEditNew1Pwd)
      errorInfo.innerHTML = '成功更新密碼！'
      const data = {
        pwd: memberEditNew1Pwd ? memberEditNew1Pwd : memberPwd,
        id: localStorageId,
      }
      fetch('http://localhost:3000/member/editMemberPwd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          console.log(res.json())
          // return res.json()
          setTimeout(() => {
            setModalShow(false)
          }, 2000)
        })
        // .then((row) => {
        //   console.log(row)

        // })
        .catch((error) => {
          console.log('error')
        })
    }
  }

  const editPwdModal = (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={modalShow}
      onHide={() => setModalShow(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">變更密碼</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div class="form-group">
            <label htmlFor="oldpwd">舊密碼</label>
            <input
              type="text"
              className="form-con"
              id="oldpwd"
              value={memberEditPwd}
              onChange={(e) => {
                const newMemberEditPwd = e.target.value
                setMemberEditPwd(newMemberEditPwd)
              }}
            />
          </div>
          <div class="form-group">
            <label htmlFor="newpwd">新密碼</label>
            <input
              type="text"
              className="form-con "
              id="newpwd"
              value={memberEditNew1Pwd}
              onChange={(e) => {
                const newMemberEditNew1Pwd = e.target.value
                setmemberEditNew1Pwd(newMemberEditNew1Pwd)
              }}
            />
          </div>
          <div class="form-group">
            <label htmlFor="newpwdcheck">請再輸入一次新密碼</label>
            <input
              type="text"
              className="form-con"
              id="newpwdcheck"
              value={memberEditNew2Pwd}
              onChange={(e) => {
                const newMemberEditNew2Pwd = e.target.value
                setmemberEditNew2Pwd(newMemberEditNew2Pwd)
              }}
            />
          </div>
          <small id="errorinfo" className="text-muted errorinfo"></small>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={upDatePwdBtn} className="update-img-btn">
          更改
        </button>
      </Modal.Footer>
    </Modal>
  )
  const editPwnBtn = (
    <Button className="update-img-btn" onClick={() => setModalShow(true)}>
      變更密碼
    </Button>
  )

  return (
    <>
      {editPwnBtn}
      {editPwdModal}
    </>
  )
}

export default EditPwdModal
