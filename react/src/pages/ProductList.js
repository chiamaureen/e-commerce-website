import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../list.css'
import Main from '../components/Product/Main'
import UnderDescription from '../components/Product/UnderDescription'
import OtherSell from '../components/Product/OtherSell'
import Comment from '../components/comment/Comment'
function ProductList(props) {
  const [myData, setData] = useState()
  const [ScrollY, setScrollY] = useState()
  const { isAuth } = props
  const getData = async () => {
    const res = await fetch('http://localhost:3000/product/get-db', {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
  }
  useEffect(() => {
    const fix = document.querySelector('#fix')
    const small_product = document.querySelector('#small-product')
    const scroll = document.querySelector('#scroll')
    const img1 = document.querySelector('#img1')
    const img2 = document.querySelector('#img2')
    const img3 = document.querySelector('#img3')
    const img4 = document.querySelector('#img4')
    // window.scrollY
    const newY = () => {
      setScrollY(window.scrollY)
      // // if (ScrollY < 110) {
      // //   fix.style.cssText = '  position:static;'
      // }
      if (ScrollY >= 0) {
        fix.style.cssText = '  position:sticky;top:70px;'
      } else if (ScrollY >= 3000) {
        fix.style.cssText = 'static'
      }
      if (window.scrollY < 2700) {
        small_product.style.transform = `translate3d(0px, ${window.scrollY}px, 0px)`
      }
      if (window.scrollY < 800) {
        img1.style.opacity = '1'
      } else {
        img1.style.opacity = '.5'
      }
      if (window.scrollY < 1600 && window.scrollY > 800) {
        img2.style.opacity = '1'
      } else {
        img2.style.opacity = '.5'
      }
      if (window.scrollY < 2400 && window.scrollY > 1600) {
        img3.style.opacity = '1'
      } else {
        img3.style.opacity = '.5'
      }
      if (window.scrollY < 3200 && window.scrollY > 2400) {
        img4.style.opacity = '1'
      } else {
        img4.style.opacity = '.5'
      }
    }
    window.addEventListener('scroll', newY)
    return (
      () => {
        window.removeEventListener('scroll', ScrollY)
      },
      []
    )
  })
  return (
    <>
      <Main />
      <Comment isAuth={isAuth} />
      <OtherSell />
    </>
  )
}
export default ProductList
