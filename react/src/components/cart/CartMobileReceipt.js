import React, { useState } from 'react'

function CartMobileReceipt(props) {
  return (
    <>
      <div id="receipt-device-wrap" className="">
        <label for="receipt-device">手機載具條碼：</label>
        <input type="text" id="receipt-device" className="cart-input" />
      </div>
    </>
  )
}

export default CartMobileReceipt
