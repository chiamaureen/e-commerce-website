import React, { useState, useEffect } from 'react'
import '../member.css'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Modal,
  NavDropdown,
} from 'react-bootstrap'
import EditPwdModal from './EditPwdModal'

import TWZipCode from './TWZipCode'

function AccountSetting(props) {
  //用localStorage裡的id判斷是哪個帳號登入
  const localStorageInfo = localStorage.getItem('memberLogInInfo')
  const localStorageId = JSON.parse(localStorageInfo).id

  //登入的帳號的初始資料
  const [memberName, setMemberName] = useState('')
  const [memberEmail, setMemberEmail] = useState('')
  const [memberGender, setMemberGender] = useState('')
  const [memberBirth, setMemberBirth] = useState('')
  const [memberPwd, setMemberPwd] = useState('')
  const [avatar, setAvatar] = useState('')
  const [postcode, setPostcode] = useState('') //郵遞區號

  //TWZipCode要用的地址
  const [country, setCountry] = useState() //縣市
  const [township, setTownship] = useState() //區域
  const [addressStringDb, setAddressStringDb] = useState('') //地址的字串

  //載入畫面時從資料庫讀去把資料set進各個項目裡
  useEffect(() => {
    if (localStorageId !== '') {
      const data = { id: localStorageId }
      fetch('http://localhost:3000/member/getMemberData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          //console.log(res.json());
          return res.json()
        })
        .then((res) => {
          console.log(res)
          //console.log(res[0].email);
          setMemberName(res[0].name)
          setMemberEmail(res[0].email)
          if (res[0].birth) {
            setMemberBirth(res[0].birth.slice(0, 10))
          }
          setMemberGender(res[0].gender)
          setMemberPwd(res[0].pwd)
          setAvatar(res[0].avatar)
          if(res[0].addressCode === 0 ){
            setCountry(-1)
            setTownship(-1)
          }else{
            setPostcode((res[0].addressCode).toString())
          }
          setAddressStringDb(res[0].addressString)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [])

  //更新後的會員資料的hook
  const [memberEditName, setMembeEdirName] = useState('')
  const [memberEditEmail, setmemberEditEmail] = useState('')
  const [memberEditGender, setMemberEditGender] = useState('')
  const [memberEditBirth, setMemberEditBirth] = useState('')
  const [memberEditPwd, setMemberEditPwd] = useState('')
  const [memberEditNew1Pwd, setmemberEditNew1Pwd] = useState('')
  const [memberEditNew2Pwd, setmemberEditNew2Pwd] = useState('')

  //更新按鈕觸發的function
  function formSubmit(event) {
    const data = {
      name: memberEditName ? memberEditName : memberName,
      email: memberEditEmail ? memberEditEmail : memberEmail,
      gender: memberEditGender ? memberEditGender : memberGender,
      birth: memberEditBirth ? memberEditBirth : memberBirth,
      id: localStorageId,
      addressCode: postcode ,
      addressString: addressStringDb
    }

    fetch('http://localhost:3000/member/editMemberData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res.json())
        alert("修改成功！")
        return res.json()
      })
      .then((row) => {
        console.log(row)
      })
      .catch((error) => {})
  }


//圖片上傳的click
function editAvatarOnChange(e) {
  let file = e.target.files[0]
  let imgName = file.name;
  const data = new FormData()
  data.append('avatar', file)
  fetch('http://localhost:3000/member/editMemberAvatar', {
    method: 'POST',
    body: data,
  })
    .then(res => {
      console.log(res)
      fetch("http://localhost:3000/member/memberImg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: localStorageId,
          avatarName: imgName
        })
      })
        .then(res => {
          alert("修改成功！")
          setAvatar(imgName)
          return res.json();
        })
    })
    .catch(error => console.log(error));
  }


  //更改密碼的modal的判斷
  const [modalShow, setModalShow] = useState(false)

  return (
    <>
      <div className="member_main">
        <div className="row">
          <h4>帳號設定</h4>
        </div>
        <div className="row">
          <div className="col-6">
            <form>
              <div className="form-group">
                <label htmlFor="name">顯示暱稱</label>
                <input
                  type="text"
                  className="form-con"
                  id="name"
                  value={memberName}
                  onChange={(e) => {
                    const newmemberName = e.target.value
                    setMemberName(newmemberName)
                    setMembeEdirName(newmemberName)
                  }}
                />
                <small id="emailHelp" className="form-text text-muted">
                  如果不希望真實姓名出現在搜尋頁面，請選擇一個暱稱
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="email">電子郵件 </label>
                <input
                  type="email"
                  className="form-con"
                  id="email"
                  aria-describedby="emailHelp"
                  value={memberEmail}
                  onChange={(e) => {
                    const newmemberEmail = e.target.value
                    setMemberEmail(newmemberEmail)
                    setmemberEditEmail(newmemberEmail)
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">性別</label>
                <select
                  className="form-con"
                  id="gender"
                  onChange={(e) => {
                    const newMemberGenger = e.target.value
                    setMemberEditGender(newMemberGenger)
                  }}
                >
                  <option value="1" selected={memberGender === '1'}>
                    男
                  </option>
                  <option value="2" selected={memberGender === '2'}>
                    女
                  </option>
                  <option value="3" selected={memberGender === '3'}>
                    其他
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="birth">生日</label>
                <br />
                <input
                  className="form-con"
                  id="birth"
                  type="date"
                  value={memberBirth}
                  onChange={(e) => {
                    const newBirth = e.target.value
                    setMemberBirth(newBirth)
                    setMemberEditBirth(newBirth)
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
                addressStringDb={addressStringDb}
                setAddressStringDb={setAddressStringDb}
               />
              </div>
              <h5>變更密碼</h5>
              <EditPwdModal
                modalShow={modalShow}
                setModalShow={setModalShow}
                memberPwd={memberPwd}
                setMemberPwd={setMemberPwd}
                memberEditPwd={memberEditPwd}
                setMemberEditPwd={setMemberEditPwd}
                memberEditNew1Pwd={memberEditNew1Pwd}
                setmemberEditNew1Pwd={setmemberEditNew1Pwd}
                memberEditNew2Pwd={memberEditNew2Pwd}
                setmemberEditNew2Pwd={setmemberEditNew2Pwd}
              />
              <hr />
              <button
                href=""
                type="button"
                className="update-img-btn"
                onClick={formSubmit}
              >
                更新
              </button>
            </form>
          </div>
          <div className="col-1"></div>
          <div className="col-5">
            <h5>更新大頭照</h5>
            <div
              style={{
                height: '160px',
                width: '160px',
              }}
            >
              <img
                className="avatar"
                src={
                  avatar
                    ? `http://localhost:3000/images/member/${avatar}`
                    : 'http://localhost:3001/images/noneavatar.jpg'
                }
                alt="找不到圖片"
              />
            </div>
            {/* <h6 href="" className="img-select">
              從電腦中選取檔案
            </h6>
            <button href="" className="update-img-btn">
              更新大頭照
            </button> */}
            <form name="avatarform" encType="multipart/forn-data">
                  <div class="form-group mt-3">
                    {/* <label for="editAvatar">修改大頭貼</label> */}
                    <input
                      name="avatar"
                      type="file"
                      class="form-control-file"
                      id="editAvatar"
                      accept=".jpg,.jpeg,.png"
                      // value={avatar}
                      onChange={editAvatarOnChange}
                    />
                    <img id="myimg" src="" alt="" width="600px"></img>
                  </div>
                </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AccountSetting