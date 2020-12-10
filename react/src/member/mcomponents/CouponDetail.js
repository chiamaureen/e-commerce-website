import React from 'react'
import Gift from '../images/coupon.svg'

function Coupon(props) {
  const { id, coupon_name, coupon_rule, coupon_date, coupon_code } = props

  // function copy(){
  //   const copybtn = document.getElementById(id).coupon_code;
  //   copybtn.select(); // 選擇物件
  //   document.execCommand("Copy"); // 執行瀏覽器複製命令
  //   alert("已複製好，可貼粘。");
  // }
  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-4">
              <div className="coupon-svg-div">
                <img src={Gift} className="coupon-svg" alt="" />
              </div>
            </div>
            <div className="col-8">
              <h5 className="card-title">艸艸了事</h5>
              <h6 className="card-title">[{coupon_name}]</h6>
              <p className="card-text">{coupon_rule}</p>
              <p className="card-text">
                使用期限︰{coupon_date.slice(0, 4)}/{coupon_date.slice(5, 7)}/
                {coupon_date.slice(8, 10)}前
              </p>
              <hr />
              <span className="card-text" id={id}>
                優惠代碼 ：{coupon_code}
              </span>
              <button
                className="order-btn"
                style={{ float: 'right' }}
                onClick={() => {
                  console.log('error')
                }}
              >
                複製
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Coupon
