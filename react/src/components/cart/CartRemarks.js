import React, { useState } from 'react'

function CartRemarks(props) {
  return (
    <>
      <div className="col-8">
        <div className="cart">
          <table>
            <thead>
              <tr>
                <th>
                  <h3 className="table-title">訂單備註</h3>
                </th>
              </tr>
            </thead>
          </table>
          <div className="inner">
            <textarea name="" id="remarks" rows="8"></textarea>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartRemarks
