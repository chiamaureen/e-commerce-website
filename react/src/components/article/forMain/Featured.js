import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/articleAll.css'
function Featured() {
  const [article, setArticle] = useState([])

  async function getArticleFromServer() {
    const url = 'http://localhost:3000/article/forFeatured'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    // 設定資料
    setArticle(data)
  }
  useEffect(() => {
    getArticleFromServer()
  }, [])

  const display = (
    <>
      {article.map((value, index) => {
        return (
          <div className="featuredBlock" key={value.sid}>
            <button>
              <Link to="/articleDetail">{value.sid}</Link>
            </button>
            <h3>{value.title}</h3>
            <div className="line"></div>
          </div>
        )
      })}
    </>
  )
  return (
    <>
      <div className="featuredTop">艸艸精選文章</div>
      {display}
    </>
  )
}

export default Featured
