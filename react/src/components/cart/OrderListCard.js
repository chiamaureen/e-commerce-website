import useSelection from 'antd/lib/table/hooks/useSelection'
import React, { useState, useEffect } from 'react'

function OrderListCard(props) {
  return (
    <>
      <div className="row col-12 px-0 mb-5 justify-content-center">
        <div className="card order-list">
          <div className="card-body">
            <h5 class="card-title">您的訂單</h5>
            <div className="d-flex justify-content-between">
              <p class="card-text">訂單編號:</p>
              <p class="card-text">20043UUSCCKK</p>
            </div>
            <div className="d-flex justify-content-between">
              <p class="card-text">訂單金額:</p>
              <p class="card-text">{props.price}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p class="card-text">運送及付款方式:</p>
              <p class="card-text">宅配/信用卡</p>
            </div>
            <div className="d-flex justify-content-between">
              <p class="card-text">收件人:</p>
              <p class="card-text">Bunny</p>
            </div>
            <div className="d-flex justify-content-between">
              <p class="card-text">聯絡電話:</p>
              <p class="card-text">0912345678</p>
            </div>
            <div className="d-flex justify-content-between">
              <p class="card-text">收件地址:</p>
              <p class="card-text">台北市大安區忠孝東路四段45號</p>
            </div>
            <div className="d-flex justify-content-between">
              <p class="card-text">發票:</p>
              <p class="card-text">手機載具: /Q2S+XEQ</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderListCard
