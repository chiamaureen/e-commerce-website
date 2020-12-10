import React from 'react'
import { Link } from 'react-router-dom'
import './css/articleAll.css'
function Navbar() {
  return (
    <>
      <header>
        <img src="./IMG/navbarLogo.svg" alt="圖片遺失" />
        <ul>
          <li>
            <Link to="/articleDetail">品牌故事</Link>
          </li>
          <li>
            <Link to="/articleDetail">商品列表</Link>
          </li>
          <li>
            <Link to="/articleDetail">課程活動</Link>
          </li>
          <li>
            <Link to="/articleDetail">文章專欄</Link>
          </li>
          <li>
            <Link to="/articleDetail">
              <img src="./IMG/member.svg" alt="圖片遺失" />
            </Link>
          </li>
          <li>
            <Link to="/articleDetail">
              <img src="./IMG/購物車.svg" alt="圖片遺失" />
            </Link>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Navbar
