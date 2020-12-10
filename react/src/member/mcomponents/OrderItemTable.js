import React, { useState, useEffect } from 'react'
import '../member.css'
import { Link } from 'react-router-dom' 

function OrderItemTable(props) {
  const {
    Order_Picture,
    Order_Detail_name,
    Order_Detail_amount,
    Order_Detail_price,
  } = props

  return (
    <>
      <tr>
        <th scope="row">
          <div className="orderItemImg">
            <img src={Order_Picture} alt="" />
          </div>
        </th>
        <td>{Order_Detail_name}</td>
        <td>{Order_Detail_amount}</td>
        <td>{Order_Detail_price}</td>
        <td>
        <Link to="/ProductList/25">
        <button className="order-btn">查看商品詳細頁</button>
          </Link>
        </td>
      </tr>
    </>
  )
}

export default OrderItemTable
