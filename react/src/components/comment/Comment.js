import React, { useState, useEffect } from 'react'
import './Comment.sass'
import {
  Container,
  Row,
  Col,
  Button,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap'
import Mypagination from './Mypagination'
import moment from 'moment'
import CommentInput from './CommentInput'
import { Rate } from 'antd'
import 'antd/dist/antd.css'
import CommentList from './CommentList'
import { Pagination } from 'react-bootstrap'
import { transformSkinType } from '../../utils'
import ReactStars from 'react-rating-stars-component'
import reactStars from 'react-rating-stars-component'

function Comment(props) {
  const [comment, setComment] = useState([])
  const [displayComment, setDisplayComment] = useState([])
  const [selectedSkin, setSelectedSkin] = useState(0)
  const [dataLoading, setDataLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostPerPage] = useState(5)
  const [totalComment, setTotalComment] = useState([])
  //星星的計算
  const [oneStar, setOneStar] = useState(0)
  const [twoStar, setTwoStar] = useState(0)
  const [threeStar, setThreeStar] = useState(0)
  const [fourStar, setFourStar] = useState(0)
  const [fiveStar, setFiveStar] = useState(0)
  const [avgRating, setAvgRating] = useState(0)
  const { isAuth } = props
  //顯示評論的填寫區
  const [showInput, setShowInput] = useState(false)
  //按讚
  const [like, setLike] = useState(0)

  const apiURL = 'http://localhost:3000/comment/'

  async function getRating() {
    const ratingURL = `${apiURL}/getRating`
    const request = new Request(ratingURL, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    setAvgRating(data.avgRating)
    setOneStar(data.oneStar)
    setTwoStar(data.twoStars)
    setThreeStar(data.threeStars)
    setFourStar(data.fourStars)
    setFiveStar(data.fiveStars)
  }
  async function getCommentFromServer() {
    // 開啟載入的指示圖示
    setDataLoading(true)

    const url = 'http://localhost:3000/comment/formatList'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    setComment(data.rows)
    setDisplayComment(data.rows)
    // setTotalComment(data.rows.length)
    let skinFilteredComment = fiterSkin(data.rows, selectedSkin)
    setPaging(skinFilteredComment)
    // setDataLoading(false)
  }

  useEffect(() => {
    getCommentFromServer()
  }, [])
  useEffect(() => {
    getRating()
  }, [])

  // 每次total資料有改變，0.5秒後關閉載入指示
  useEffect(() => {
    setTimeout(() => setDataLoading(false), 500)
  }, [displayComment])

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )
  const paginate = (pageNumber) => {
    console.log(pageNumber)
    setCurrentPage(Number(pageNumber))
    let skinFilteredComment = fiterSkin(comment, selectedSkin)
    setPaging(skinFilteredComment)
  }
  // //設定目前的頁面
  // const currentComments = displayComment.slice(
  //   (currentPage - 1) * postsPerPage,
  //   postsPerPage
  // )
  function setPaging(skinFilterdComment) {
    /**
    1. 拿到所有的comment (comment)
    2. 整理資料
      2-1. 看一頁需要幾筆data (postsPerPage)
      2-2. 看他filter條件 (selectedSkin)
      2-3. 看現在所選的是哪一頁 (currentPage)
    3. 將filter後的commnet 塞到display comment (displayComment)
    **/

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentComments = skinFilterdComment.slice(
      indexOfFirstPost,
      indexOfLastPost
    )
    setDisplayComment(currentComments)
    setTotalComment(skinFilterdComment.length)
  }

  function onSkinChange(skinId) {
    setSelectedSkin(skinId)
    let selected = fiterSkin(comment, skinId)
    //setDisplayComment(selected)
    setPaging(selected)
  }

  function fiterSkin(comment, skinId) {
    let selectedSkinComment = []

    if (Number(skinId) === 0) {
      selectedSkinComment = comment
    } else {
      selectedSkinComment = comment.filter((item) => {
        return item.skin === Number(skinId)
      })
    }
    return selectedSkinComment
  }

  async function addCommentToSever(formData) {
    //props.setLoading(true)
    //const newData = { name, email, title, review }
    console.log('FORM', formData)
    const newData = {
      name: formData.name,
      email: formData.email || '',
      skin: formData.skin,
      rating: formData.rating,
      title: formData.title,
      review: formData.review,
    }
    // 連接的伺服器資料網址
    const url = 'http://localhost:3000/comment/add'

    // 設定為json格式
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(JSON.stringify(newData))

    const response = await fetch(request)
    const data = await response.json()

    console.log('伺服器回傳的json資料', data)
    getCommentFromServer()
    //警示
    setTimeout(() => {
      setLoading(false)
      // setDataLoading(false)
      alert('已新增評論')
      // props.history.push('/product')
    }, 500)
  }

  async function deleteCommentFromServer(deleteCommentId) {
    // 開啟載入指示
    // setDataLoading(true)

    // 連接的伺服器資料網址
    const url = 'http://localhost:3000/comment/del/' + deleteCommentId

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'DELETE',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    alert('已刪除')
    getCommentFromServer()

    // 設定資料
    // if (!displayComment.sid) {
    //   const newComment = displayComment.filter((item, index) => {
    //     return item.sid !== sid
    //   })

    //   alert('已刪除')
    // }
  }

  function setLoading(isLoading) {
    console.log('change', isLoading)
    setDataLoading(isLoading)
  }

  return (
    <>
      <Container>
        <Row>
          <div className="comment">
            <h5>顧客評論</h5>
            <Button
              variant="success"
              style={{ fontSize: '16px', color: 'white', float: 'right' }}
              title="關閉"
              onClick={() => setShowInput(!showInput)}
            >
              {showInput ? '關閉' : '撰寫產品評論'}
            </Button>
            {showInput ? (
              <CommentInput
                comment={comment}
                setComment={setComment}
                displayComment={displayComment}
                setDisplayComment={setDisplayComment}
                setLoading={setLoading}
                addCommentToSever={addCommentToSever}
                setShowInput={setShowInput}
              />
            ) : (
              ''
            )}

            <div className="total-reviews">
              <div className="total-rating">
                {/* <ReactStars size={30} value={Number(avgRating)} edit={false} /> */}
                <Rate
                  disabled
                  defaultValue={5}
                  style={{ color: '#95C375', fontSize: '16px' }}
                  value={avgRating}
                  allowHalf
                />
                {/* <i class="fas fa-star"></i> */}
              </div>
              <div className="total-score">
                <h2>{avgRating.toFixed(2)}</h2>
                <div className="reviews">
                  <h6>{totalComment}評論</h6>
                </div>
              </div>

              <div className="stars">
                <div className="five">
                  <Rate
                    disabled
                    defaultValue={5}
                    style={{ color: '#95C375', fontSize: '14px' }}
                  />
                  <span className="countingStar">{fiveStar}</span>
                </div>
                <div className="four">
                  <Rate
                    disabled
                    defaultValue={4}
                    style={{ color: '#95C375', fontSize: '14px' }}
                  />
                  <span className="countingStar">{fourStar}</span>
                </div>
                <div className="three">
                  <Rate
                    disabled
                    defaultValue={3}
                    style={{ color: '#95C375', fontSize: '14px' }}
                  />
                  <span className="countingStar">{threeStar}</span>
                </div>
                <div className="two">
                  <Rate
                    disabled
                    defaultValue={2}
                    style={{ color: '#95C375', fontSize: '14px' }}
                  />
                  <span className="countingStar">{twoStar}</span>
                </div>
                <div className="one">
                  <Rate
                    disabled
                    defaultValue={1}
                    style={{ color: '#95C375', fontSize: '14px' }}
                  />
                  <span className="countingStar">{oneStar}</span>
                </div>
              </div>
            </div>
            {/* 選擇膚質的下拉選單 */}
            <div className="dropdown-area">
              <DropdownButton
                id="dropdown-basic-button"
                title={transformSkinType(selectedSkin)}
                variant="outline-success"
                size="sm"
                style={{ fontSize: '16px' }}
              >
                <Dropdown.Item
                  size="sm"
                  style={{ fontSize: '16px' }}
                  onSelect={(e) => onSkinChange(e)}
                  eventKey="0"
                  value="0"
                >
                  全部
                </Dropdown.Item>
                <Dropdown.Item
                  size="sm"
                  style={{ fontSize: '16px' }}
                  onSelect={(e) => onSkinChange(e)}
                  eventKey="1"
                  value="1"
                >
                  油性
                </Dropdown.Item>
                <Dropdown.Item
                  size="sm"
                  style={{ fontSize: '16px' }}
                  onSelect={(e) => onSkinChange(e)}
                  eventKey="2"
                >
                  混合肌
                </Dropdown.Item>
                <Dropdown.Item
                  size="sm"
                  style={{ fontSize: '16px' }}
                  onSelect={(e) => onSkinChange(e)}
                  eventKey="3"
                >
                  乾性
                </Dropdown.Item>
              </DropdownButton>
            </div>
            <div className="customer-review">
              <CommentList
                // displayComment={currentComments}
                displayComment={displayComment}
                selectedSkin={selectedSkin}
                deleteCommentFromServer={deleteCommentFromServer}
                isAuth={isAuth}
                // setisAuth={setisAuth}
              />
            </div>
          </div>
          <div className="pagination-area">
            {/* <Pagination>{items}</Pagination> */}
            <Mypagination
              postsPerPage={postsPerPage}
              totalComment={totalComment}
              paginate={paginate}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </Row>
      </Container>
    </>
  )
}

export default Comment
