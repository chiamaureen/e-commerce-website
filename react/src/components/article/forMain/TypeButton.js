import React, { useState, useEffect } from 'react'
import '../css/TypeButton.css'
function TypeButton(props) {
  const { setType } = props
  return (
    <>
      <ul className="typeUl">
        <li className="typeLi">
          <button
            className="typeButton"
            onClick={() => {
              props.setType(0)
            }}
          >
            全部文章
          </button>
        </li>
        <li className="typeLi">
          <button
            className="typeButton"
            onClick={() => {
              props.setType(1)
            }}
          >
            精選特輯
          </button>
        </li>
        <li className="typeLi">
          <button
            className="typeButton"
            onClick={() => {
              props.setType(2)
            }}
          >
            產品筆記
          </button>
        </li>
        <li className="typeLi">
          <button
            className="typeButton"
            onClick={() => {
              props.setType(3)
            }}
          >
            活動體驗
          </button>
        </li>
        <li className="typeLi">
          <button
            className="typeButton"
            onClick={() => {
              props.setType(4)
            }}
          >
            永續生活
          </button>
        </li>
        <li className="typeLi">
          <button
            className="typeButton"
            onClick={() => {
              props.setType(5)
            }}
          >
            臉部保養
          </button>
        </li>
      </ul>
    </>
  )
}

export default TypeButton
