/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import '../member.css'
import ReactDOM from 'react-dom'
//import ImageUploading from 'react-images-uploading'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Favorite from '../images/favorite.svg'
import Svg2 from '../images/2.svg'
import Svg3 from '../images/3.svg'
import Svg4 from '../images/4.svg'
import Svg5 from '../images/5.svg'
import Box from '../images/box.svg'

function AboutMe() {
  const [memberName, setMemberName] = useState('')
  const [memberLevel, setMemberLevel] = useState('')
  const localStorageInfo = localStorage.getItem('memberLogInInfo')
  const localStorageId = JSON.parse(localStorageInfo).id
  const [avatar, setAvatar] = useState('')

  useEffect(() => {
    const data = { id: localStorageId }
    let isSub = true
    fetch('http://localhost:3000/member/getMemberData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        // console.log(res.json());
        return res.json()
      })
      .then((res) => {
        if (isSub) {
          //console.log(res);
          setMemberName(res[0].name)
          setMemberLevel(res[0].level)
          setAvatar(res[0].avatar)
        }
      })
      .catch((error) => {
        console.log(error)
      })
    return () => (isSub = false)
  }, [])

  //關於我左邊的會員判斷
  const level = document.querySelector('#level')
  switch (memberLevel) {
    case 1:
      level.innerHTML = '白銀'
      break
    case 2:
      level.innerHTML = '黃金'
      break
    case 3:
      level.innerHTML = '白金'
      break
    case 4:
      level.innerHTML = '鑽石'
      break
    default:
      break
  }

  //關於我右上的會員判斷
  const level1 = document.querySelector('#level1')
  switch (memberLevel) {
    case 1:
      level1.innerHTML = '黃金'
      break
    case 2:
      level1.innerHTML = '白金'
      break
    case 3:
      level1.innerHTML = '鑽石'
      break
    // case 4:
    //   level1.innerHTML = '鑽石'
    //   break
    default:
      break
  }

  //關於我右上的會員圖片判斷
  const levelimg1 = document.querySelector('#levelimg1')
  switch (memberLevel) {
    case 1:
      levelimg1.src = Svg3
      break
    case 2:
      levelimg1.src = Svg4
      break
    case 3:
      levelimg1.src = Svg5
      break
    // case 4:
    //   levelimg1.src = (Svg5)
    //   break
    default:
      break
  }
  //關於我右下的會員判斷
  const level2 = document.querySelector('#level2')
  switch (memberLevel) {
    case 1:
      level2.innerHTML = '白金'
      break
    case 2:
      level2.innerHTML = '鑽石'
      break
    // case 3:
    //   level2.innerHTML = '鑽石'
    //   break
    default:
      break
  }
  //關於我右下的會員圖片判斷
  const levelimg2 = document.querySelector('#levelimg2')
  switch (memberLevel) {
    case 1:
      levelimg2.src = Svg4
      break
    case 2:
      levelimg2.src = Svg5
      break
    // case 3:
    //   levelimg2.src = (Svg5)
    //   break
    default:
      break
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


  return (
    <>
      <div className="member_main">
        <div className="row">
          <h4>關於我</h4>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col-6" style={{ padding: '0' }}>
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
                <form name="avatarform" encType="multipart/forn-data">
                  <div class="form-group mt-3">
                    <label for="editAvatar">修改大頭貼</label>
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
              <div className="col-6">
                <p>{memberName}</p>
                <p>
                  <span id="level"></span>
                  <span> 台灣</span>
                </p>

                <div className="mb-3">
                  <span>目前評價</span>
                  <span>
                    <img src={Favorite} style={{ height: '23px' }} alt="" />
                  </span>
                  <span>
                    <img src={Favorite} style={{ height: '23px' }} alt="" />
                  </span>
                  <span>
                    <img src={Favorite} style={{ height: '23px' }} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 mission" style={{ height: '200px' }}>
            <div
              style={{
                marginBottom: '10px',
                padding: '20px',
                border: '1px #d3d3d5 solid',
                borderRadius: '5px',
              }}
            >
              <h6>當年度任務</h6>
              <p>
                完成以下任二條件，可升級<span id="level1"></span>會員
              </p>
              <div style={{ display: 'flex' }}>
                <img
                  id="levelimg1"
                  style={{ width: '85px', height: '85px' }}
                  alt=""
                />
                <div style={{ marginLeft: '15px' }}>
                  <div>
                    <img src={Box} style={{ height: '16px' }} alt=""  className="mr-2"/>
                    <span>消費滿3000</span>
                  </div>
                  <div>
                    <img src={Box} style={{ height: '16px' }} alt=""  className="mr-2"/>
                    <span>消費(含)三次以上</span>
                  </div>
                  <div>
                    <img src={Box} style={{ height: '16px' }} alt=""  className="mr-2"/>
                    <span>完成艸小遊戲</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                marginBottom: '10px',
                padding: '20px',
                border: '1px #d3d3d5 solid',
                borderRadius: '5px',
              }}
            >
              <h6>下年度任務</h6>
              <p>
                完成以下任二條件，可升級<span id="level2"></span>會員
              </p>
              <div style={{ display: 'flex' }}>
                <img
                  id="levelimg2"
                  style={{ width: '85px', height: '85px' }}
                  alt=""
                />
                <div style={{ marginLeft: '15px' }}>
                  <div>
                    <img src={Box} style={{ height: '16px' }} alt=""  className="mr-2"/>
                    <span>消費滿5000</span>
                  </div>
                  <div>
                    <img src={Box} style={{ height: '16px' }} alt=""  className="mr-2"/>
                    <span>消費(含)五次以上</span>
                  </div>
                  <div>
                    <img src={Box} style={{ height: '16px' }} alt=""   className="mr-2"/>
                    <span>完成艸小遊戲</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe