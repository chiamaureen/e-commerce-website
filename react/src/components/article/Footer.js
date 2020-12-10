import React from 'react'
import { Link } from 'react-router-dom'
import './css/articleAll.css'
function Footer() {
  return (
    <>
      <footer>
        <div className="footerIcons">
          <img src="./IMG/footerIcon01.svg" alt="" />
          <img src="./IMG/footerIcon02.svg" alt="" />
          <img src="./IMG/footerIcon03.svg" alt="" />
          <img src="./IMG/footerIcon04.svg" alt="" />
          <img src="./IMG/footerIcon05.svg" alt="" />
        </div>
        <div className="footerInfo">
          <ul>
            <li>
              <Link to="/articleDetail">品牌故事</Link>
            </li>
            <li>
              <div></div>
            </li>
            <li>
              <Link to="/articleDetail">商品列表</Link>
            </li>
            <li>
              <div></div>
            </li>
            <li>
              <Link to="/articleDetail">課程活動</Link>
            </li>
            <li>
              <div></div>
            </li>
            <li>
              <Link to="/articleDetail">文章專欄</Link>
            </li>
          </ul>
        </div>
        <div className="backGroundColor"></div>
      </footer>
    </>
  )
}

export default Footer
