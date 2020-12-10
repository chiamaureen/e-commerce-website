import React, { useState, useEffect } from 'react'
import './Product.sass'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
function Product() {
  const [product, setProduct] = useState([])
  const [dataLoading, setDataLoading] = useState(false)

  async function getProductFromServer() {
    // 開啟載入的指示圖示
    setDataLoading(true)

    const url = 'http://localhost:3000/'

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
    setProduct(data)
  }

  // componenliidMount，一開始會載入資料(在元件初始化完成後)
  useEffect(() => {
    getProductFromServer()
  }, [])

  // 每次total資料有改變，2秒後關閉載入指示
  useEffect(() => {
    setTimeout(() => setDataLoading(false), 2000)
  }, [product])

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <>
      {product.map((value, index) => {
        return (
          <Col className="homepageCard" xs={6} md={3}>
            <Card style={{ border: 'none' }} className="homepage">
              <img variant="top" src={value.picture} alt="" />
              <div>
                <h5>{value.name}</h5>
                <p>
                  NTD<span> {value.price}</span>
                </p>

                <Button
                  variant="success"
                  style={{
                    color: '#ffffff',
                    fontSize: '14px',
                    backgroundColor: '#99cb77',
                    border: 'none',
                  }}
                >
                  了解更多
                </Button>
              </div>
            </Card>
          </Col>
        )
      })}
    </>
  )
  return (
    <>
      <div className="homepage-product">
        <div className="home-title">
          <img src="/images/title-product.png" alt="" />
        </div>
        <Container>
          <Row>{display}</Row>
        </Container>
      </div>
    </>
  )
}

export default Product
