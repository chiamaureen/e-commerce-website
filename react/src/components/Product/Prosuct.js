import React, { useState, useEffect } from 'react'
import SmallProduct from './SmallProduct'

import Magnifier from './Ｍagnifier'

function Product() {
  return (
    <>
      <div class="product-detail-product">
        <div class="product-detail-product-main">
          <img src="http://localhost:3001/img/hot00.jpg" alt=""/>
          <img src="http://localhost:3001/img/hot03.jpg" alt=""/>
          <img src="http://localhost:3001/img/hot04.jpg" alt=""/>
          <img src="http://localhost:3001/img/top6.jpg" alt=""/>
        </div>
        {/* <SmallProduct /> */}
      </div>
    </>
  )
}

export default Product