import React, { useState } from 'react'
import '../member.css'

function Rufund() {
  const [refundDetail, setRefundDetail] = useState(false)
  const refundDetailTable = (
    <>
      <button
        className="col-2 order-btn"
        onClick={() => setRefundDetail(false)}
      >
        收合
      </button>
    </>
  )
  const nonRefundDetail = (
    <>
      <button className="col-2 order-btn" onClick={() => setRefundDetail(true)}>
        展開
      </button>
    </>
  )

  return (
    <>
      <div className="member_main">
        <div className="row">
          <h4>退款申請</h4>
        </div>
        <div className="row right-nav">
          <h5 className="right-nav-item nav-link under-line">處理中</h5>
          <h5 className="right-nav-item nav-link">已退款</h5>
          <h5 className="right-nav-item nav-link">不同意退款</h5>
        </div>
        <div>
          <div className="row order-part">
            <span className="order-title">訂單編號</span>
            <span className="odrder-code">20043UUHWOLD</span>
          </div>
          <div className="row order-detail">
            <table className="table table-striped mt-4">
              <thead>
                <tr>
                  <th scope="col">商品圖</th>
                  <th scope="col">名稱</th>
                  <th scope="col">退款原因</th>
                  <th scope="col">價格</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <div className="orderItemImg">
                      <img src="/images/facial1.jpg" alt="" />
                    </div>
                  </th>
                  <td>順其自然卸妝乳</td>
                  <td>商品有瑕疵</td>
                  <td>$350</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row align-items-center">
            <h5 className="col-8">共1件</h5>
            <h3 className="col-2">$350</h3>
            {refundDetail ? refundDetailTable : nonRefundDetail}
          </div>
        </div>
      </div>
    </>
  )
}

export default Rufund
