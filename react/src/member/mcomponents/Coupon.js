import React, { useState, useEffect } from 'react'
import CouponDetail from './CouponDetail'

function Coupon() {
  const localStorageLevel = localStorage.getItem('memberLogInInfo')
  const memberLevel = JSON.parse(localStorageLevel).level
  const [memberCoupon, setMemberCoupon] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/member/coupon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        //console.log(res.json());
        return res.json()
      })
      .then((res) => {
        console.log(res)
        const rrr = res.filter(
          (item, index) => item.coupon_level <= memberLevel
        )
        setMemberCoupon(rrr)
        console.log(rrr)
      })
      .catch((error) => {
        //console.log(error)
      })
  }, [])

  return (
    <>
      <div className="member_main">
        <div className="row">
          <h4>優惠券</h4>
        </div>
        {memberCoupon.map((item, index) => {
          return (
            <CouponDetail
              key={item.coupon_id}
              id={item.coupon_id}
              coupon_name={item.coupon_name}
              coupon_rule={item.coupon_rule}
              coupon_date={item.coupon_date}
              coupon_code={item.coupon_code}
            />
          )
        })}
      </div>
    </>
  )
}

export default Coupon
