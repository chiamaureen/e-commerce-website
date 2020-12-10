import React, { useState, useEffect } from 'react'
import './Comment.sass'
import { Button, Form } from 'react-bootstrap'
// import { Rate } from 'antd'
// import 'antd/dist/antd.css'
import ReactStars from 'react-rating-stars-component'

function CommentInput(props) {
  const {
    comment,
    setComment,
    displayComment,
    setDisplayComment,
    addCommentToSever,
    setShowInput,
  } = props
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [rating, setRating] = useState('')
  const [title, setTitle] = useState('')
  const [review, setReview] = useState('')
  const [skin, setSkin] = useState('')

  const ratingStar = {
    size: 30,
    count: 5,
    isHalf: false,
    value: 4,
    color: '#ddead7',
    activeColor: '#95C375',
    onChange: (newRating) => {
      setRating(newRating)
      console.log(`rating value is ${newRating}`)
    },
  }

  const addComment = () => {
    if (review !== '') {
      console.log(rating)
      // 建立一個新的Comment項目
      const newItem = {
        // id: +new Date(),
        name: name,
        title: title,
        review: review,
        skin: skin,
        rating: rating,
      }

      // const newComment = [newItem, ...displayComment]
      // setDisplayComment(newComment)

      // 清空輸入框
      setName('')
      setEmail('')
      setTitle('')
      setReview('')
      setSkin('')
      setRating(3)
      setShowInput(false)
      //儲存進資料庫
      props.addCommentToSever(newItem)
    }
  }
  return (
    <>
      <Form className="form">
        <div className="info">
          <Form.Group className="input-name col-3">
            <h6>姓名</h6>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="input-email  col-6">
            <h6>Email</h6>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
        </div>
        <div className="rating">
          <h6>評分</h6>
          <ReactStars {...ratingStar} />
        </div>
        <Form.Group controlId="exampleForm.ControlInput1">
          <h6>標題</h6>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <h6>評論</h6>
          <Form.Control
            as="textarea"
            rows={3}
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <h6>膚質</h6>
          <Form.Control
            as="select"
            value={skin}
            onChange={(e) => {
              setSkin(e.target.value)
            }}
          >
            <option value="">請選擇</option>
            <option value="1">油性</option>
            <option value="2">混合肌</option>
            <option value="3">乾性</option>
          </Form.Control>
        </Form.Group>
        <Button
          className="comment-btn"
          style={{ fontSize: '16px', color: 'white', float: 'right' }}
          variant="success"
          onClick={() => addComment()}
        >
          送出評論
        </Button>
      </Form>
    </>
  )
}

export default CommentInput
