import React, { Component, useState, useEffect } from 'react'
// import Chart from './Chart'
import { HorizontalBar } from 'react-chartjs-2'
import ChartRight from './ChartRight'
import ChartDown from './ChartDown'
import { Link, withRouter } from 'react-router-dom'

class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        labels: ['7月份', '8月份', '9月份', '10月份', '11月份'],
        datasets: [
          {
            label: '身體清潔',
            fill: false,
            backgroundColor: 'rgba(19, 41 ,72, 0.25)',
            data: [50, 55, 90, 123, 45, 10],
            borderColor: 'rgb(255, 99, 132)',
          },
          {
            label: '臉部保養',
            fill: false,
            backgroundColor: 'rgba(241, 90 ,36, 1)',
            data: [78, 80, 85, 75, 82, 80],
            borderColor: 'rgb(255, 204, 0)',
          },
          {
            label: '頭髮護理',
            fill: false,
            backgroundColor: 'rgba(255, 204 ,0, 1)',
            data: [40, 59, 1, 33, 22, 45],
            borderColor: 'rgb(0, 99, 132)',
          },
        ],
        maintainAspectRatio: false,
      },
      scales: {
        xAxes: [
          {
            ticks: {
              callback: function (label, index, labels) {
                return label.toFixed(2) + '%'
              },
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              callback: function (label, index, labels) {
                return label
              },
              fontSize: 24,
              fontColor: 'black',
            },
            display: true,
          },
        ],
      },
    }
  }

  render() {
    // console.log(this.props.getClickData)
    console.log(this.props.totalPrice)

    return (
      <div className="conteiner">
        <div className="row">
          <div className="container-fluid">
            <div className="row d-flex justify-content-lg-around pt-md-0 mt-md-3 mb-5">
              <div className="col-xl-4 col-sm-6 p-2">
                <div className="card  text-center my-3">
                  <div className="d-flex justify-content-center">
                    <i
                      width="150"
                      height="150"
                      className="fas card-img-top fas fa-dollar-sign fa-3x text-warning"
                    ></i>
                  </div>

                  <div className="card-body text-nowrap">
                    <h2>11月份總銷售額</h2>
                    <h2 className="card-text">$135,000</h2>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-sm-6 p-2">
                <div className="card text-center my-3">
                  <div className="d-flex justify-content-center">
                    <i className="fas card-img-top fas fa-mouse fa-3x text-info"></i>
                  </div>

                  <div className="card-body text-nowrap">
                    <h2>各品項總點擊數</h2>
                    <h2 className="card-text">830次</h2>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6 p-2">
                <div className="card text-center my-3">
                  <div className="d-flex justify-content-center">
                    <i className="fas card-img-to fa-users fa-3x text-danger"></i>
                  </div>

                  <div className="card-body text-nowrap">
                    <h2>今日到訪人數</h2>
                    <h2 className="card-text">168人</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <h2 className="text-center">銷售金額圖表</h2>
            <HorizontalBar
              options={{
                responsive: true,
              }}
              data={this.state.data}
              height={300}
              width={500}
            />
            {/* <Chart /> */}
            <h2 className="text-center">單位(購買商品數/點擊商品數)</h2>
          </div>

          <ChartRight />
          <ChartDown />
        </div>
      </div>
    )
  }
}

export default withRouter(MainPage)
