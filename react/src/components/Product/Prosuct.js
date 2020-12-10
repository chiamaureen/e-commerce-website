import React, { useState, useEffect } from 'react'
import SmallProduct from './SmallProduct'

import Big from './big'

function Product() {
  return (
    <>
      <div class="tom-product">
        <div class="tom-product-main">
          <Big imgUrl="http://localhost:3001/img/hot00.jpg" />
          <Big imgUrl="http://localhost:3001/img/hot01.jpg" />
          <Big imgUrl="http://localhost:3001/img/hot04.jpg" />
          <Big imgUrl="http://localhost:3001/img/top6.jpg" />
        </div>
        <SmallProduct />
      </div>
    </>
  )
}

export default Product