import React, { useState, useEffect } from 'react'
import './Activity.sass'
import { Container, Row, Col, Button } from 'react-bootstrap'

function Activity() {
  return (
    <>
      <div className="home-activity">
        <div className="home-title">
          <img src="/images/title-activity.png" alt="" />
        </div>
        {/* <div className="leaf2">
          <img src="/images/leaf2.png" alt="" />
        </div> */}
        <div className="activity-content">
          <div className="photo2 img-2">
            <img src="/images/course-5.jpg" alt="" />
          </div>
          <div className="home-photo">
            <img src="/images/course-3.jpg" alt="" />
          </div>
          <Col xs={6} md={3} className="home-card">
            <div className="home-card-info">
              <h6>【講座】</h6>
              <h3>超親民環保攻略</h3>
              <p>
                台灣每個人都很不喜歡舊的東西，所以對待車子都很小心翼翼怕弄髒弄舊，但也因為這樣的態度而十分喜歡買新的東西，反思一下，如果大家都那麼細心呵護車子，二手的車況會糟到哪裡？如果我們能一直循環使用車況佳的二手車，那他們就不會一直頻繁製造了。
              </p>
              <h6>
                2020/11/30
                <br />
                松山文創園區 索票入場
              </h6>
            </div>
            <Button
              variant="outline-success"
              size="sm"
              style={{ marginLeft: '70%' }}
            >
              了解更多
            </Button>
          </Col>
        </div>
        {/* <div className="activity-content-right">
          <Col xs={6} md={3}>
            <div className="home-card">
              <h6>【講座】</h6>
              <h3>超親民環保攻略</h3>
              <p>
                台灣每個人都很不喜歡舊的東西，所以對待車子都很小心翼翼怕弄髒弄舊，但也因為這樣的態度而十分喜歡買新的東西，反思一下，如果大家都那麼細心呵護車子，二手的車況會糟到哪裡？如果我們能一直循環使用車況佳的二手車，那他們就不會一直頻繁製造了。
              </p>
              <h6>
                2020/11/30
                <br />
                松山文創園區 索票入場
              </h6>
            </div>
            <Button variant="outline-success" size="sm" className="mt-5">
              了解更多
            </Button>
          </Col>
          <div className="photo2 img-2">
            <img src="/images/course-5.jpg" alt="" />
          </div>
        </div> */}
      </div>

      <div className="home-article">
        <div className="home-title">
          <img src="/images/title-article-2.png" alt="" />
        </div>
        <Container>
          <Row>
            <Col xs={6} md={4} className="home-article-left">
              <img src="/images/article-pic-3.jpg" alt="" />
              <div className="preview">
                <h3>「眼不見為淨」，真的淨了嗎？關於全民淨灘風潮</h3>
                <p>
                  淨灘活動可不是三五好友因為新奇而相約到海邊，隨手撿撿垃圾就好像在幫過於便利的生活「贖罪」。藉由親身經歷可以開始省思：「眼不見為淨」，真的淨了嗎？
                </p>
              </div>
              <Button variant="outline-success" size="sm">
                繼續閱讀
              </Button>
            </Col>
            <Col xs={6} md={4} className="home-article-middle">
              <img src="/images/article-pic-4.jpg" alt="" />
              <div className="preview">
                <h3>4 個可能導致粉刺、痘痘的生活習慣，你中了幾個？</h3>
                <p>
                  大家都知道，生活習慣與肌膚健康有著密不可分的關係。除了作息不固定、晚睡，和高油高糖飲食容易影響肌膚代謝外，清潔習慣更是長痘痘、粉刺的關鍵因素之一。
                </p>
              </div>
              <Button variant="outline-success" size="sm">
                繼續閱讀
              </Button>
            </Col>
            <Col xs={6} md={4} className="home-article-right">
              <img src="/images/course-2.jpg" alt="" />
              <div className="preview">
                <h3>理所當然的生活方式，究竟為整個地球帶來多少影響？</h3>
                <p>
                  已經有許多無塑的生活方式被大力推廣，越來越多人了解到改變便利的生活方式不代表生活品質降低。這場戰役唯一的勝算就是停止對地球資源予取予求，而是循環永續。
                </p>
              </div>
              <Button variant="outline-success" size="sm">
                繼續閱讀
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Activity
