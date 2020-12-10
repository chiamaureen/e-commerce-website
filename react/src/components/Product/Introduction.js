import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Rate } from 'antd'
function Introduction() {
  const [amount, setAmount] = useState(1)
  const data = {
    sid: 25,
    name: '奇蹟辣木油',
    price: 500,
    picture: 'http://localhost:3001/img/hot00.jpg',
    amount: amount,
  }
  return (
    <>
      <div class="tom-Introduction" id="Introduction">
        <div id="fix">
          <div class="tom-title-top" id="title-top">
            <h2 class="tom-product-title">
              {' '}
              奇蹟辣木油 <span class="ml">250ml</span>
            </h2>
            <div class="tom-star-top">
              <div>37 reviews</div>
              {/* <img src="http://localhost:3001/SVG/star-empty.svg" alt="" />
              <img src="http://localhost:3001/SVG/star-empty.svg" alt="" />
              <img src="http://localhost:3001/SVG/star-empty.svg" alt="" /> */}
              <Rate
                    disabled
                    allowHalf
                    defaultValue={4.5}
                    style={{ color: '#95C375', fontSize: '14px' }}
                  />
            </div>
          </div>
          <p class="tom-article" id="article">
            綠藤無乳液保養經典組合，特別推薦給尋找持久保濕修護的你。
          </p>
          <p class="tom-ar2" id="article">
            「純淨保養」極簡 2 步驟：以連續 2
            年登上國際時裝週的活萃修護精華露，搭配只有 1
            個成分的油保養經典－奇蹟辣木油。完整保濕，在秋冬季節，給肌膚持久的修護潤澤。
          </p>
          <div class="tom-fi" id="fi">
            <div class="tom-th-ic" id="th-ic">
              <img src="http://localhost:3001/icon/know-more-2.png" alt="" />
              <img src="http://localhost:3001/icon/know-more-1.png" alt="" />
              <img src="http://localhost:3001/icon/know-more-3.png" alt="" />
            </div>
            <h3 class="tom-price">NT 820</h3>
            <div class="tom-count">
              <div className="tom-sel">
                <img
                  onClick={() => {
                    setAmount(amount + 1)
                  }}
                  src="http://localhost:3001/img/plus.svg"
                  alt=""
                />
                <span class="amo">{amount}</span>
                <img
                  onClick={() => {
                    setAmount(amount - 1)
                    if (amount == 0) {
                      setAmount(0)
                    }
                  }}
                  src="http://localhost:3001/img/remove.svg"
                  alt=""
                />
              </div>

              <div
                class="tom-add-shop"
                onClick={() => {
                  if (localStorage.cart == null) {
                    localStorage.setItem('cart', JSON.stringify([data]))
                  } else {
                    const newCart = JSON.parse(localStorage.getItem('cart'))
                    console.log(newCart)
                    const addItem = [data, ...newCart]
                    localStorage.setItem('cart', JSON.stringify(addItem))
                  }
                }}
              >
                加入購物車
              </div>
            </div>
            <h2 class="tom-ar-title">相關文章</h2>
            <ul>
              <ol><Link to="/CourseDetail/1"><div class="tom-title-ol">1.世外桃源的香草革命，台東尚德村的「小村遠遠」讓百人小村擁有更多未來</div> </Link></ol>
              <ol ><Link to ="/CourseDetail/2"><div class="tom-title-ol">2.家長就是學校獨特資源！屏東四林國小校田凝聚全村之力陪孩子成長</div> </Link></ol>
              <ol ><Link to ="/CourseDetail/3"><div class="tom-title-ol">3.熱氣球之外的台東 卑南藥草植物園與食療火鍋、鹿野紅烏龍與小農市集</div> </Link></ol>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
export default Introduction