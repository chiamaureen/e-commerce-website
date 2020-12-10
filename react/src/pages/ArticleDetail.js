import React from 'react'
// import '../App.css'
//import Navbar from '../conponents/common/Navbar'
import TypeDetail from '../components/article/TypeDetail'
import DetailMain from './../components/article/DetailMain'
// import Featured from '../conponents/forMain/Featured'
//import Footer from '../conponents/common/Footer'

function ArticleDetail() {
  return (
    <>
      <div class="hr"></div>
      <TypeDetail />
      <main className="arMain">
        <DetailMain />
      </main>
      <div class="hr"></div>
    </>
  )
}

export default ArticleDetail
