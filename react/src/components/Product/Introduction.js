import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Rate } from 'antd'
function Introduction() {
  const [amount, setAmount] = useState(1)
  const [fix,setFix]=useState(false)
  const data = {
    sid: 25,
    name: '奇蹟辣木油',
    price: 500,
    picture: 'http://localhost:3001/img/hot00.jpg',
    amount: amount,
  }
const fixIntroduction = ()=>{
  // console.log(window.scrollY)
  if (window.scrollY<1900){
    setFix(true)
  }else{
    setFix(false)
  }
}
window.addEventListener('scroll',fixIntroduction)
 
  
  return (
    <>
      <div class={fix ? "product-detail-Introduction   fix":"product-detail-Introduction"}
      id="Introduction">
          <div class="product-detail-title-top" id="title-top">
            <h2 class="product-detail-product-title">
              {' '}
              奇蹟辣木油 <span class="ml">250ml</span>
            </h2>
            <div class="product-detail-star-top">
              <p>37 reviews</p>
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
          <p class="product-detail-article" id="article">
            綠藤無乳液保養經典組合，特別推薦給尋找持久保濕修護的你。
          </p>
          <p class="product-detail-ar2" id="article">
            「純淨保養」極簡 2 步驟：以連續 2
            年登上國際時裝週的活萃修護精華露，搭配只有 1
            個成分的油保養經典－奇蹟辣木油。完整保濕，在秋冬季節，給肌膚持久的修護潤澤。
          </p>
          <div class="product-detail-fi" id="fi">
            <div class="product-detail-th-ic" id="th-ic">
              <img src="http://localhost:3001/images/know-more-1.png" alt="" />
              <img src="http://localhost:3001/images/know-more-2.png" alt="" />
              <img src="http://localhost:3001/images/know-more-3.png" alt="" />
            </div>
            <h3 class="product-detail-price">NT 820</h3>
            <div class="product-detail-count">
              <div className="product-detail-sel">
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
                class="product-detail-add-shop"
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
            <h2 class="product-detail-ar-title">相關文章</h2>
            <ul class="product-recommend-article-area">
              <li class="product-recommend-article"><Link to="/CourseDetail/1" className="link">1.世外桃源的香草革命，台東尚德村的「小村遠遠」讓百人小村擁有更多未來 </Link></li>
              <li class="product-recommend-article"><Link to ="/CourseDetail/2"className="link">2.家長就是學校獨特資源！屏東四林國小校田凝聚全村之力陪孩子成長</Link></li>
              <li class="product-recommend-article" ><Link to ="/CourseDetail/3"className="link">3.熱氣球之外的台東 卑南藥草植物園與食療火鍋、鹿野紅烏龍與小農市集</Link></li>
            </ul>
          </div>
      
      </div>
    </>
  )
}
export default Introduction