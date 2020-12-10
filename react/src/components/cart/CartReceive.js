import React, { useState, useEffect } from 'react'

function CartReceive(props) {
  const [memberInfo, setMemberInfo] = useState([])
  const [memberInfoUsed, setMemberInfoUsed] = useState(false)

  const [name, setName] = useState('')
  const [tel, setTel] = useState('')
  const [post, setPost] = useState('')
  const [addr, setAddr] = useState('')

  // function getMemberInfo() {
  //   const newMemberInfo = []

  //   fetch('http://localhost:3000/api/delivery-addr', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'applications/json',
  //     },
  //   })
  //     .then((res) => {
  //       res.json()
  //     })
  //     .then((result) => {
  //       newMemberInfo = JSON.parse(result)
  //       setMemberInfo(newMemberInfo)
  //     })
  // }

  //
  useEffect(() => {
    const a = JSON.stringify([{ id: 1, name: 'Bunny', level: 1 }])

    localStorage.setItem('memberLogInInfo', a)
  })

  // useEffect(() => {
  //   getMemberInfo()
  // })

  useEffect(() => {
    JSON.parse(localStorage.getItem('memberLogInInfo'))
  })

  const checkMemberInfo = () => {
    const checkbox = document.querySelector('#member-data')

    if (memberInfoUsed === false) {
      const newName = 'Bunny'
      const newTel = '0912345678'
      const newPost = '106'
      const newAddr = '台北市大安區忠孝東路四段45號'

      setName(newName)
      setTel(newTel)
      setPost(newPost)
      setAddr(newAddr)
    } else {
    }

    setMemberInfoUsed((prevMemberInfoUsed) => !prevMemberInfoUsed)
  }

  return (
    <>
      <div className="col-7">
        <div className="cart">
          <table>
            <thead>
              <tr>
                <th>
                  <h3 className="table-title">收件人資訊</h3>
                </th>
              </tr>
            </thead>
          </table>
          <div className="inner order-data">
            <input
              type="checkbox"
              name="member-data"
              id="member-data"
              className="mb-3"
              onClick={() => {
                checkMemberInfo()
              }}
            />
            <label for="member-data" className="mb-3">
              同會員資料
            </label>
            <br />
            <label for="order-name" className="mb-3">
              姓名：
            </label>
            <input
              type="text"
              name="order"
              id="order-name"
              className="mb-3 cart-input"
              required
              value={name}
            />
            <br />
            <label for="order-phone" className="mb-3">
              電話：
            </label>
            <input
              type="tel"
              name="order"
              id="order-phone"
              className="mb-3 cart-input"
              required
              value={tel}
            />
            <br />
            <label for="order-port" className="mb-3">
              郵遞區號：
            </label>
            <input
              type="text"
              name="order"
              id="order-port"
              className="mb-3 cart-input"
              value={post}
            />
            <br />
            <label for="order-addr" className="mb-3">
              地址：
            </label>
            <input
              type="text"
              name="order"
              id="order-addr"
              className="mb-3 cart-input"
              value={addr}
            />
            <br />
          </div>
        </div>
      </div>
    </>
  )
}

export default CartReceive
