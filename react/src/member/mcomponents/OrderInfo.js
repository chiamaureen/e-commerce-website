import React, { useState } from 'react'
import '../member.css'
import OrderInfoDetail from './OrderInfoDetail'

function OdrerInfo(props) {
  //判斷訂單狀態
  const { viewFilter, OrderRows } = props

  return (
    <>
      {OrderRows.map((item, index) => {
        if (viewFilter === 1 && item.Order_State !== 1) return <></>
        if (viewFilter === 2 && item.Order_State !== 2) return <></>
        return (
          <OrderInfoDetail
            key={item.Order_id}
            Order_code={item.Order_code}
            Member_name={item.Member_name}
            Order_name={item.Order_name}
            Order_mobile={item.Order_mobile}
            Order_deliver_type={item.Order_deliver_type}
            Order_deliver_store={item.Order_deliver_store}
            Order_package_id={item.Order_package_id}
            Order_pay={item.Order_pay}
            Order_Amount={item.Order_Amount}
            Order_TotalPrice={item.Order_TotalPrice}
          />
        )
      })}
    </>
  )
}

export default OdrerInfo
