import React, { useState, useEffect } from 'react'
import Rows from './Rows'

function ProductRow(props) {
  const { data, category, inputSearch, isAuth } = props

  let display = ''
  display =
    data &&
    data.map((v, i) => {
      if (v.category === category && v.category !== 0) {
        return <Rows v={v} i={i} isAuth={isAuth} />
      } else if (category === 0) {
        return <Rows v={v} i={i} isAuth={isAuth} />
      }
    })
  console.log(display)

  return (
    <>
      <div class="container shop_list-product-first-row ">
        <div class="row">{display.length !== 0 ? display : '查無資料'}</div>
      </div>
    </>
  )
}
export default ProductRow
