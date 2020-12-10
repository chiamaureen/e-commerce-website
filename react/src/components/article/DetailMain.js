import React from 'react'
import './css/articleAll.css'
import Featured from './forMain/Featured'
import DetailPage from './forMain/DetailPage'
import { Link } from 'react-router-dom'

function DetailMain() {
  return (
    <>
      <div className="articleList">
        <div className="hr"></div>
        <DetailPage />
      </div>
      <div className="recommend">
        <div className="featured">
          <Featured />
        </div>
        <div className="productRecommend">
          <div>
            <img src="./IMG/為您推薦Icon.svg" alt="" />
            <h3>為您推薦</h3>
          </div>
        </div>
        <div className="productLink">
          <Link to="/ProductList/13">
            <img src="./IMG/hot01.jpg" alt="" />
          </Link>
          <div className="coupon">
            <div>限時優惠</div>
            <div>熱銷</div>
          </div>
          <h3>奇蹟辣木油</h3>
          <p>奇蹟辣木油，只有一個成分的油保養經典</p>
          <div className="productLine"></div>
          <p className="productTime">30 ml</p>
          <div className="productLine"></div>
          <div className="productPrice">
            <h3>$820</h3>
            <img src="./IMG/heart.svg" alt="" />
          </div>
        </div>
        <div className="productLink">
          <img src="./IMG/wash.jpg" alt="" />
          <div className="coupon">
            <div>買一送一</div>
            <div>限量</div>
          </div>
          <h3>活萃洗面乳</h3>
          <p>挑戰這輩子陪你最久的溫和洗面乳</p>
          <div className="productLine"></div>
          <p className="productTime">100 ml</p>
          <div className="productLine"></div>
          <div className="productPrice">
            <h3>$420</h3>
            <img src="./IMG/heart.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailMain
