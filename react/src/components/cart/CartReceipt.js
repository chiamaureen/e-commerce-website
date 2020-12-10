import React, { useState } from 'react'

import CartMobileReceipt from './CartMobileReceipt'

function CartReceipt(props) {
  return (
    <>
      <div className="col-4">
        <div className="cart cart-info">
          <table>
            <thead>
              <tr>
                <th>
                  <h3 className="table-title">發票</h3>
                </th>
              </tr>
            </thead>
          </table>
          <div className="inner">
            <input
              type="radio"
              id="receipt-1"
              name="receipt"
              value="receipt-1"
            />
            <label for="receipt-1">紙本發票</label>
            <br />
            <input
              type="radio"
              id="receipt-2"
              name="receipt"
              value="receipt-2"
            />
            <label for="receipt-2">會員載具</label>
            <br />
            <input
              type="radio"
              id="receipt-3"
              name="receipt"
              value="receipt-3"
            />
            <label for="receipt-3">手機載具</label>
            <br />
            <CartMobileReceipt />
          </div>
        </div>
      </div>
    </>
  )
}

export default CartReceipt
