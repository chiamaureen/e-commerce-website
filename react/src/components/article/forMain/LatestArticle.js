import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/articleAll.css'
function LatestArticle() {
  const [article, setArticle] = useState([])
  const [show, setShow] = useState(0)

  async function getArticleFromServer() {
    const url = 'http://localhost:3000/article/forLatest'

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
        if (show == 0) {
          return (
            <div className="latestArticle" key={value.sid}>
              <h2>{value.title}</h2>
              <p>{value.createTime}</p>
              <div className="forHover">
                <img
                  src={'http://localhost:3001/Img/文章圖片/' + value.picName}
                  alt=""
                />
              </div>
              <div className="contextP">
                <p>{value.context}</p>
              </div>
              <button className="latestArticleBtn">
                <Link to="/articleDetail">繼續閱讀</Link>
              </button>
            </div>
          )
        } else if (show == 1) {
          return
        }
      })}
    </>
  )
  return <>{display}</>
}

export default LatestArticle
