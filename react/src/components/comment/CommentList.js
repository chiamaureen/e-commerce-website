import React, { useState, useEffect } from 'react'
import {
  Container,
  Row,
  Col,
  Button,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap'
import moment from 'moment'
import { Rate } from 'antd'
import Counter from './Counter'
import { transformSkinType } from '../../utils'

function CommentList(props) {
  const {
    displayComment,
    setDisplayComment,
    deleteCommentFromServer,
    isAuth,
  } = props

  // console.log(props)

  const [commentlist, setCommentList] = useState([])

  const deleteCommnet = (deleteCommentId) => {
    deleteCommentFromServer(deleteCommentId)
  }

  return (
    <>
      <div className="customer-review">
        {displayComment.map((item, index) => {
          return (
            <>
              <div className="porfile">
                <div className="photo"></div>
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="rating">
                    <Rate
                      disabled
                      value={item.rating}
                      style={{ color: '#95C375', fontSize: '14px' }}
                    />
                  </div>
                </div>
              </div>
              <Col xs={12} md={12}>
                <div className="skintype">
                  您的肌膚類型:{transformSkinType(item.skin)}
                </div>
                <div className="comment-content">
                  <h6>{item.title}</h6>
                  <p>{item.review}</p>
                  <div className="comment-time">
                    <p>{moment(item.date).format('YYYY-MM-DD')}</p>
                  </div>
                  <Counter />
                  {isAuth === false ? (
                    ''
                  ) : (
                    <>
                      <Button
                        onClick={() => deleteCommnet(item.sid)}
                        style={{
                          fontSize: '16px',
                          color: 'white',
                          margin: '10px',
                        }}
                        variant="success"
                      >
                        刪除
                      </Button>
                    </>
                  )}
                  {/* <Button
                    onClick={() => deleteCommnet(item.sid)}
                    style={{ fontSize: '16px', color: 'white', margin: '10px' }}
                    variant="success"
                  >
                    刪除
                  </Button> */}
                </div>
              </Col>
            </>
          )
        })}
      </div>
    </>
  )
}

export default CommentList
