import React from 'react'

function CartCreditCard(props) {
  return (
    <>
      <div className="col-5">
        <div className="cart cart-info">
          <table>
            <thead>
              <tr>
                <th>
                  <h3 className="table-title">信用卡資訊</h3>
                </th>
              </tr>
            </thead>
          </table>
          <div className="inner">
            <label for="cardNum" className="mb-3">
              卡號：
            </label>
            <input
              type="text"
              name="cardNum"
              className="cart-input mr-1 mb-3"
              maxLength="16"
              pattern="^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$"
            />
            <br />
            <label for="cardExpire" className="">
              到期日：
            </label>
            <input
              type="text"
              name="cardExpire"
              className="credit-num cart-input mr-1 mb-3"
              maxLength="2"
              pattern=""
            />
            &frasl;
            <input
              type="text"
              name="cardExpire"
              className="credit-num cart-input mr-1 mb-3"
              maxLength="2"
              pattern=""
            />
            <label for="securityCode" className="">
              安全碼：
            </label>
            <input
              type="text"
              name="securityCode"
              className="credit-num cart-input mr-1 mb-3"
              maxLength="3"
              pattern=""
            />
            <br />
            <label for="cardName" className="mb-3">
              持卡人姓名：
            </label>
            <input
              type="text"
              name="cardName"
              className="credit-name cart-input"
              pattern=""
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default CartCreditCard
