import React, { useState, useEffect } from 'react'
// import '../../../style/CW_items.scss'
import '../../../styles/Search.css'
import { Button } from 'react-bootstrap'
import { MdAddCircle, MdModeEdit, MdDelete } from 'react-icons/md'
import PaginacionTabla from '../PaginacionTabla'
import Container from 'react-bootstrap/Container'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import SellerSearch from '../SellerSearch'
// import '../../../style/login.css'

function Order(props) {
  const [commodity, setCommodity] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(5)
  const [Option, setOption] = useState(0)
  const [inputSearch, setInputSearch] = useState('')
  const [delUpdate, setDelUpdate] = useState(false)

  async function getUsersFromServer() {
    // 開啟載入指示
    // setDataLoading(true)

    // 連接的伺服器資料網址
    const url = 'http://localhost:3000/seller/sellerOrder'

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'post',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
  }

  useEffect(() => {
    fetch('http://localhost:3000/seller/sellerOrder', {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ Options: Option, inputSearch }),
    })
      .then((res) => {
        // console.log(res.json());
        return res.json()
      })
      .then((res) => {
        // console.log(res)
        setCommodity(res)
      })
  }, [Option, inputSearch])

  const deletcUserFromServer = async (order_id) => {
    const res = await fetch(
      'http://localhost:3000/seller/OrderDel/' + order_id,
      {
        method: 'DELETE',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    )
    const data = [...(await res.json())]

    console.log(data)
    if (!data.order_id) {
      const newProducts = data.filter((v, i) => {
        return v.order_id !== order_id
      })

      setCommodity(newProducts)
      // setDelUpdate(!delUpdate)
      alert('刪除完成')
    }
  }
  useEffect(
    () => {
      getUsersFromServer()
    },
    [delUpdate],
    [commodity]
  )

  // // 一開始就會開始載入資料
  // useEffect(() => {
  //   console.log(123)
  //   getUsersFromServer()
  // }, [])

  // // 每次users資料有變動就會X秒後關掉載入指示
  // useEffect(() => {
  //   setTimeout(() => {
  //     setDataLoading(false)
  //   }, 600)
  // }, [commodity])

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  // 設定頁碼
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentorder = commodity.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const display = (
    <>
      <SellerSearch
        data={commodity}
        setOption={setOption}
        Option={Option}
        setInputSearch={setInputSearch}
        inputSearch={inputSearch}
        getData={getUsersFromServer}
      />

      <PaginacionTabla
        postsPerPage={postsPerPage}
        totalPosts={commodity.length}
        paginate={paginate}
      />

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">姓名</th>
            <th scope="col">金額</th>
            <th scope="col">時間</th>
            <th scope="col">付款狀態</th>
            <th scope="col">包裹狀態</th>
          </tr>
        </thead>
        <tbody>
          {currentorder.map((value, index) => {
            let str = ''
            switch (value.Order_State) {
              default:
              case 1:
                str = '尚未付款'
                break
              case 2:
                str = '處理中'
                break
              case 3:
                str = '待收貨'
                break
              case 4:
                str = '已完成'
                break
              case 5:
                str = '已取消'
                break
            }

            return (
              <tr key={value.Order_id}>
                <td>{value.Order_id}</td>
                <td>{value.Member_name}</td>
                <td>{value.Order_TotalPrice}</td>
                <td>
                  {moment(value.Order_CreatedTime).format('YYYY-MM-DD HH-mm')}
                </td>
                {/* <td>{value.Order_CreatedTime}</td> */}
                <td>{value.Order_pay}</td>
                <td>{str}</td>
                <Button
                  variant="success"
                  onClick={() => {
                    props.history.push('/order-edit/' + value.Order_id)
                  }}
                >
                  <MdModeEdit /> 編輯
                </Button>
                {'  '}
                <Button
                  onClick={() => {
                    deletcUserFromServer(value.Order_id)
                  }}
                  variant="danger"
                >
                  <MdDelete /> 刪除
                </Button>
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
        <h3>訂單列表</h3>
        <hr />
        {dataLoading ? loading : display}
      </div>
    </>
  )
}
export default withRouter(Order)
