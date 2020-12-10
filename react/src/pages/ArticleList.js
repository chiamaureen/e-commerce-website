import React from 'react'
// import '../App.css'
// import Navbar from '../conponents/common/Navbar'
import Type from '../components/article/Type'
import ListMain from '../components/article/ListMain'
// import Featured from '../conponents/forMain/Featured'
// import Footer from '../conponents/common/Footer'

function ArticleList() {
  return (
    <>
      <div className="hr"></div>
      <Type />
      <main className="arMain">
        <ListMain />
      </main>

      <div className="hr"></div>
    </>
  )
}

export default ArticleList
