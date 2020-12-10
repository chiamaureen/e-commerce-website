import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { withRouter } from 'react-router-dom'
import { MdAddCircle, MdModeEdit, MdDelete } from 'react-icons/md'
import { Button } from 'react-bootstrap'
function ProductData(props) {
  const sid = props.match.params.sid
  console.log(sid)
  const [myData, setMydata] = useState([])
  const getData = async () => {
    const res = await fetch('http://localhost:3000/product/ProductData', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const data = await res.json()

    setMydata(data)
  }

  const delData = async (sid) => {
    const res = await fetch('http://localhost:3000/product/del/' + sid, {
      method: 'DELETE',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const data = [...(await res.json())]

    console.log(data)
    if (!data.sid) {
      const newProducts = data.filter((v, i) => {
        return v.sid !== sid
      })

      setMydata(newProducts)
      alert('刪除完成')
    }
  }
  useEffect(() => {
    getData()
  }, [])

  const display = (
    <>
      <table class="table table-striped   ">
        <thead>
          <tr class="title">
            <th scope="col" className="text-nowrap">
              流水號
            </th>
            <th scope="col" className="text-nowrap">
              產品名稱
            </th>
            <th scope="col" className="text-nowrap">
              定價
            </th>
            <th scope="col" className="text-nowrap">
              銷售價格
            </th>
            <th scope="col" className="text-nowrap">
              上架日期
            </th>
            <th scope="col" className="text-nowrap">
              產品描述{' '}
            </th>
            <th scope="col" className="text-nowrap">
              評價
            </th>
            <th scope="col" className="text-nowrap">
              追蹤人數
            </th>
            <th scope="col" className="text-nowrap">
              圖片src
            </th>
            <th scope="col" className="text-nowrap">
              銷售數量
            </th>
            <th scope="col" className="text-nowrap">
              分類
            </th>
            <th scope="col" className="text-nowrap ctrl">
              修改操作
            </th>
          </tr>
        </thead>
        <tbody>
          {myData.map((v, i) => {
            return (
              <tr key={v.sid}>
                <td width="15" className="sid">
                  {v.sid}
                </td>
                <td>{v.name}</td>
                <td>{v.price}</td>
                <td>{v.Specialoffer}</td>
                <td>{moment(v.Addedtime).format('YYYY-MM-DD ')}</td>
                <td>{v.detail}</td>
                <td>{v.star}</td>
                <td>{v.awesome}</td>
                <td>
                  <img
                    style={
                      v.imgurl
                        ? {
                            height: '160px',
                            width: '160px',
                          }
                        : {}
                    }
                    src={v.imgurl}
                    alt=""
                  />
                </td>
                <td>{v.Selling}</td>
                <td>{v.category}</td>
                <td class="bu">
                  <Button
                    variant="primary block"
                    onClick={() => {
                      props.history.push('/ProductEdit/' + v.sid)
                    }}
                  >
                    {' '}
                    <MdModeEdit /> 編輯
                  </Button>{' '}
                  <Button
                    variant="danger block"
                    onClick={() => {
                      delData(v.sid)
                    }}
                  >
                    {' '}
                    <MdDelete /> 刪除
                  </Button>{' '}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="table">{display}</div>
        </div>
      </div>
    </>
  )
}
export default withRouter(ProductData)
