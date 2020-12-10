import React, { useState, useEffect } from 'react'
import { TiHeartFullOutline } from 'react-icons/ti'

function Counter(props) {
  const [total, setTotal] = useState(0)
  const [dataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(null)

  // 載入資料用
  // async function getTotalFromServer() {
  //   // 開啟載入的指示圖示
  //   setDataLoading(true)

  //   const url = 'http://localhost:3000/counter'

  //   const request = new Request(url, {
  //     method: 'GET',
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     }),
  //   })

  //   try {
  //     const response = await fetch(request)
  //     const data = await response.json()
  //     // data會是一個物件值
  //     //console.log(data)
  //     setTotal(data.total)
  //   } catch (error) {
  //     setError(error)
  //   }
  // }

  // 載入資料用
  // async function updateTotalToServer(value) {
  //   // 開啟載入的指示圖示
  //   setDataLoading(true)

  //   const newTotal = { total: total + value }

  //   const url = 'http://localhost:3000/counter'

  //   const request = new Request(url, {
  //     method: 'PUT',
  //     body: JSON.stringify(newTotal),
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     }),
  //   })

  //   try {
  //     const response = await fetch(request)
  //     const data = await response.json()
  //     // data會是一個物件值
  //     console.log(data)

  //     // 驗証成功後再設定…
  //     setTotal(total + value)
  //   } catch (error) {
  //     setError(error)
  //   }
  // }

  // componentDidMount，一開始會載入資料(在元件初始化完成後)
  // useEffect(() => {
  //   getTotalFromServer()
  // }, [])

  // // 每次total資料有改變，2秒後關閉載入指示
  // useEffect(() => {
  //   setTimeout(() => setDataLoading(false), 700)
  // }, [total])

  const loading = (
    <div className="spinner-grow" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )

  const display = (
    <>
      <div onClick={() => setTotal(total + 1)} className="commentlike">
        <TiHeartFullOutline style={{ color: '#95C375' }} /> <span>{total}</span>
      </div>
    </>
  )

  // 以資料載入的指示狀態來切換要出現的畫面
  return dataLoading ? loading : display
}

export default Counter
