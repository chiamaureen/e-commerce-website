import React, { useState, useEffect } from 'react'
import './css/articleAll.css'
import LatestArticle from './forMain/LatestArticle'
import OtherArticle from './forMain/OtherArticle'
import Featured from './forMain/Featured'
import TypeButton from './forMain/TypeButton'
import DropDownIcon from './forMain/DropDownIcon'
import SearchInput from './SearchInput'
import { Link } from 'react-router-dom'

function ListMain() {
  const [inputSearch, setinputSearch] = useState('')
  const [searchData, setSearchData] = useState([])
  const [article, setArticle] = useState([])
  const [type, setType] = useState(0)
  const [show, setShow] = useState(true)

  const sendData = async (text = '') => {
    setinputSearch(text)
    const res = await fetch('http://localhost:3000/article/forSearch', {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ inputSearch: text }),
    })
    const data = await res.json()
    setArticle(data)
    setShow(text ? false : true)
  }

  async function getArticleFromServer() {
    const url = 'http://localhost:3000/article/forList'

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

  if (searchData) {
    return (
      <>
        {/* if(searchData== -1) */}
        <div className="articleList">
          {show ? <LatestArticle /> : null}
          <div className="hr"></div>
          <TypeButton setType={setType} />
          <div className="otherArticles">
            <OtherArticle
              type={type}
              searchData={searchData}
              inputSearch={inputSearch}
              setinputSearch={setinputSearch}
              setArticle={setArticle}
              article={article}
            />
          </div>
          <DropDownIcon />
        </div>
        <div className="recommend">
          <div className="featured">
            <Featured />
          </div>
          <SearchInput
            inputSearch={inputSearch}
            setinputSearch={setinputSearch}
            sendData={sendData}
            setShow={setShow}
          />
          <div className="productRecommend">
            <div>
              <img src="./IMG/為您推薦Icon.svg" alt="" />
              <h3>為您推薦</h3>
            </div>
          </div>
          <div className="productLink">
            <Link to="/ProductList/13">
              <img src="./IMG/wet.jpg" alt="" />
            </Link>

            <div className="coupon">
              <div>最適合您</div>
              <div>熱銷</div>
            </div>
            <h3>純粹保濕精華液</h3>
            <p>以 12 種成分的簡單，打造更專注的純粹保濕</p>
            <div className="productLine"></div>
            <p className="productTime">30 ml</p>
            <div className="productLine"></div>
            <div className="productPrice">
              <h3>$580</h3>
              <img src="./IMG/heart.svg" alt="" />
            </div>
          </div>
          <div className="productLink">
            <img src="./IMG/linkPro.jpg" alt="" />
            <div className="coupon">
              <div>限時優惠</div>
              <div>熱銷</div>
            </div>
            <h3>活萃修護精華油</h3>
            <p>當季熱銷TOP3</p>
            <div className="productLine"></div>
            <div className="productPrice">
              <h3>$1280</h3>
              <img src="./IMG/heart.svg" alt="" />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ListMain
