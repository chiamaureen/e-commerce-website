import React, { useState, useEffect } from 'react'
import '../member.css'
import Svg2 from '../images/2.svg'
import Svg3 from '../images/3.svg'
import Svg4 from '../images/4.svg'
import Svg5 from '../images/5.svg'
import Gift from '../images/gift.svg'
import Coupon from '../images/coupon.svg'
import Grass from '../images/grass.svg'

function Level() {
  const [memberLevel, setMemberLevel] = useState('')
  const localStorageInfo = localStorage.getItem('memberLogInInfo')
  const localStorageId = JSON.parse(localStorageInfo).id

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
          setMemberLevel(res[0].level)
        }
      })
      .catch((error) => {
        console.log(error)
      })
    return () => (isSub = false)
  }, [])

  return (
    <>
      <div className="member_main">
        <div className="row">
          <h4>等級權益</h4>
        </div>
        <div className="row mb-3">
          <h6 className="col-3" style={{ textAlign: 'center' }}>
            白銀會員
          </h6>
          <h6 className="col-3" style={{ textAlign: 'center' }}>
            黃金會員
          </h6>
          <h6 className="col-3" style={{ textAlign: 'center' }}>
            白金會員
          </h6>
          <h6 className="col-3" style={{ textAlign: 'center' }}>
            鑽石會員
          </h6>
        </div>
        <div className="row">
          <div
            className={memberLevel === 1 ? 'col-3 level-border' : 'col-3'}
            style={memberLevel === 1 ? {} : { opacity: '40%' }}
          >
            <div className="level-svg-div-t">
              <img className="level-svg-t" src={Svg2} alt="" />
            </div>
            <hr />
            <div className="mb-5 mt-3">
              <div className="level-svg-div">
                <img className="level-svg" src={Gift} alt="" />
              </div>
              <p style={{ color: '#627a86' }} className="level-word">
                生日禮
              </p>
              <h6 className="level-word">電子賀卡</h6>
            </div>
            <div className="mb-5">
              <div className="level-svg-div">
                <img className="level-svg" src={Coupon} alt="" />
              </div>
              <p style={{ color: '#627a86' }} className="level-word">
                優惠券
              </p>
              <h6 className="level-word">3張$20的優惠券不限金額皆可使用</h6>
            </div>
            <div className="mb-5">
              <div className="level-svg-div">
                <img className="level-svg" src={Grass} alt="" />
              </div>
              <p style={{ color: '#627a86' }} className="level-word">
                艸幣消費折抵
              </p>
              <h6 className="level-word">可折抵結帳金額2%</h6>
            </div>
          </div>
          <div
            className={memberLevel === 2 ? 'col-3 level-border' : 'col-3'}
            style={memberLevel === 2 ? {} : { opacity: '40%' }}
          >
            <div className="level-svg-div-t">
              <img className="level-svg-t" src={Svg3} alt="" />
            </div>
            <hr />
            <div className="mb-5 mt-3">
              <div className="level-svg-div">
                <img className="level-svg" src={Gift} alt="" />
              </div>
              <p style={{ color: '#627a86' }} className="level-word">
                生日禮
              </p>
              <h6 className="level-word">電子賀卡</h6>
            </div>
            <div className="mb-5">
              <div className="level-svg-div">
                <img className="level-svg" src={Coupon} alt="" />
              </div>
              <p style={{ color: '#627a86' }} className="level-word">
                優惠券
              </p>
              <h6 className="level-word">3張$30的優惠券不限金額皆可使用</h6>
            </div>
            <div className="mb-5">
              <div className="level-svg-div">
                <img className="level-svg" src={Grass} alt="" />
              </div>
              <p style={{ color: '#627a86' }} className="level-word">
                艸幣消費折抵
              </p>
              <h6 className="level-word">可折抵結帳金額3%</h6>
            </div>
          </div>
          <div
            className={memberLevel === 3 ? 'col-3 level-border' : 'col-3'}
            style={memberLevel === 3 ? {} : { opacity: '40%' }}
          >
            <div className="level-svg-div-t">
              <img className="level-svg-t" src={Svg4} alt="" />
            </div>
            <hr />
            <div className="mb-5 mt-3">
              <div className="level-svg-div">
                <img className="level-svg" src={Gift} alt="" />
              </div>
              <p style={{ color: '#627a86' }} className="level-word">
                生日禮
              </p>
              <h6 className="level-word">電子賀卡</h6>
            </div>
            <div className="mb-5">
              <div className="level-svg-div">
                <img className="level-svg" src={Coupon} alt="" />
              </div>
              <p style={{ color: '#627a86' }} className="level-word">
                優惠券
              </p>
              <h6 className="level-word">3張$40的優惠券不限金額皆可使用</h6>
            </div>
            <div className="mb-5">
              <div className="level-svg-div">
                <img className="level-svg" src={Grass} alt="" />
              </div>
              <p style={{ color: '#627a86' }} className="level-word">
                艸幣消費折抵
              </p>
              <h6 className="level-word">可折抵結帳金額4%</h6>
            </div>
          </div>
          <div
            className={memberLevel === 4 ? 'col-3 level-border' : 'col-3'}
            style={memberLevel === 4 ? {} : { opacity: '40%' }}
          >
            <div className="level-svg-div-t">
              <img className="level-svg-t" src={Svg5} alt="" />
            </div>
            <hr />
            <div className="mb-5 mt-3">
              <div className="level-svg-div">
                <img className="level-svg" src={Gift} alt="" />
              </div>
              <p style={{ color: '#627a86' }} className="level-word">
                生日禮
              </p>
              <h6 className="level-word">電子賀卡</h6>
            </div>
            <div className="mb-5">
              <div className="level-svg-div">
                <img className="level-svg" src={Coupon} alt="" />
              </div>
              <p style={{ color: '#627a86' }} className="level-word">
                優惠券
              </p>
              <h6 className="level-word">3張$50的優惠券不限金額皆可使用</h6>
            </div>
            <div className="mb-5">
              <div className="level-svg-div">
                <img className="level-svg" src={Grass} alt="" />
              </div>
              <p style={{ color: '#627a86' }} className="level-word">
                艸幣消費折抵
              </p>
              <h6 className="level-word">可折抵結帳金額5%</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Level
