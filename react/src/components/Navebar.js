import React, { useState } from 'react'
// import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Nav/Navbar.css'
// import Dropdown from './Nav/Dropdown'
import MyOverlay from './Nav/MyOverlay'
import { Badge, Button } from 'react-bootstrap'
import { useEffect } from 'react'

function Navbar(props) {
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const { setisAuth, isAuth} = props
  const [loginModalShow, setLoginModalShow] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(false)
    }
  }

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navberLogo" onClick={closeMobileMenu}>
          <img src="/images/navbarLogo.svg" alt="圖片遺失" />
          {/* <i class="fab fa-firstdraft" /> */}
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link
              to="/ShopList/"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              商品列表
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/CourseList"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              課程活動
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/articleList"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              文章專欄
            </Link>
          </li>
          <li className="nav-Icons">
            <MyOverlay
              loginModalShow={loginModalShow}
              setLoginModalShow={setLoginModalShow}
              setisAuth={setisAuth}
              isAuth={isAuth}
            />
          </li>
          <li className="nav-Icons">
            <Link
              to="/cart"
              onClick={closeMobileMenu}
              style={{
                textDecoration: 'none',
                color: '#a8d182',
                marginRight: '10px',
                marginLeft: '10px',
                fontSize: '1.5rem',
              }}
            >
              <i class="fas fa-shopping-cart"></i>
              {/* <Badge variant="success" pill style={{fontSize:'9px'}}>{cartItems}</Badge> */}
            </Link>
            {/* <Button variant="primary">
              Profile <Badge variant="light">{cartItems}</Badge>
              <span className="sr-only">unread messages</span>
            </Button> */}
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar

// import React, { useState, useRef } from 'react'
// import { Link } from 'react-router-dom'
// import './Navbar.sass'
// import Login from '../pages/Login'
// import { CSSTransition } from 'react-transition-group'
// import DropdownMenu from './DropdownMenu'

// function Navebar(props) {
//   const [click, setClick] = useState(false)
//   const { setisAuth, isAuth } = props
//   const [loginModalShow, setLoginModalShow] = useState(false)

//   const handleClick = () => setClick(!click)

//   const closeMobileMenu = () => setClick(false)
//   return (
//     <>
//       <nav className="navbar">
//         <Link to="/" className="navberLogo">
//           <img src="/images/navbarLogo.svg" alt="圖片遺失" />
//         </Link>

//         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//           <li className="nav-item">
//             {/* <Link to="/" className="nav-links" onClick={closeMobileMenu}>
//               品牌故事
//             </Link> */}
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/ShopList/"
//               className="nav-links"
//               onClick={closeMobileMenu}
//             >
//               商品列表
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/CourseList"
//               className="nav-links"
//               onClick={closeMobileMenu}
//             >
//               課程活動
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/articleList"
//               className="nav-links"
//               onClick={closeMobileMenu}
//             >
//               文章專欄
//             </Link>
//           </li>

//           <li className="nav-icon member">
//             <Link to="/memberroot" onClick={closeMobileMenu}>
//               <img src="/images/member.svg" alt="圖片遺失" />
//               <DropdownMenu></DropdownMenu>
//             </Link>
//           </li>
//           <li className="nav-icon cart">
//             <Link to="/cart" onClick={closeMobileMenu}>
//               <img src="/images/購物車.svg" alt="圖片遺失" />
//             </Link>
//           </li>
//           <li className="nav-icon cart1">
//             <Link to="/cart" onClick={closeMobileMenu}>
//               <img src="/images/購物車1.svg" alt="圖片遺失" />
//             </Link>
//           </li>
//           <Login
//             loginModalShow={loginModalShow}
//             setLoginModalShow={setLoginModalShow}
//             setisAuth={setisAuth}
//             isAuth={isAuth}
//           />
//         </ul>

//         <div className="menu-icon" onClick={handleClick}>
//           <i class={click ? 'fas fa-bars' : 'fas fa-times'} />
//         </div>
//       </nav>
//     </>
//   )
// }

// export default Navebar

// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import './Navbar.sass'
// import Login from '../pages/Login'

// function Navebar(props) {
//   const [click, setClick] = useState(false)
//   const { setisAuth, isAuth } = props
//   const [loginModalShow, setLoginModalShow] = useState(false)

//   const handleClick = () => setClick(!click)

//   const closeMobileMenu = () => setClick(false)
//   return (
//     <>
//       <nav className="navbar">
//         <Link to="/" className="navberLogo">
//           <img src="/images/navbarLogo.svg" alt="圖片遺失" />
//         </Link>

//         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//           <li className="nav-item">
//             {/* <Link to="/" className="nav-links" onClick={closeMobileMenu}>
//               品牌故事
//             </Link> */}
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/ShopList/"
//               className="nav-links"
//               onClick={closeMobileMenu}
//             >
//               商品列表
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/CourseList"
//               className="nav-links"
//               onClick={closeMobileMenu}
//             >
//               課程活動
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/articleList"
//               className="nav-links"
//               onClick={closeMobileMenu}
//             >
//               文章專欄
//             </Link>
//           </li>

//           <li className="nav-icon member">
//             <Link to="/memberroot" onClick={closeMobileMenu}>
//               <img src="/images/member.svg" alt="圖片遺失" />
//             </Link>
//           </li>
//           <li className="nav-icon cart">
//             <Link to="/cart" onClick={closeMobileMenu}>
//               <img src="/images/購物車.svg" alt="圖片遺失" />
//             </Link>
//           </li>
//           <li className="nav-icon cart1">
//             <Link to="/cart" onClick={closeMobileMenu}>
//               <img src="/images/購物車1.svg" alt="圖片遺失" />
//             </Link>
//           </li>
//           <Login
//             loginModalShow={loginModalShow}
//             setLoginModalShow={setLoginModalShow}
//             setisAuth={setisAuth}
//             isAuth={isAuth}
//           />
//         </ul>

//         <div className="menu-icon" onClick={handleClick}>
//           <i class={click ? 'fas fa-bars' : 'fas fa-times'} />
//         </div>
//       </nav>
//     </>
//   )
// }

// export default Navebar
