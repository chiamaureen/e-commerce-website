import Container from 'react-bootstrap/Container'
import React, { useState, useEffect } from 'react'
import { BsSearch } from "react-icons/bs";
function Search(props) {
  const { getData, setOption, Option, setInputSearch, inputSearch } = props

  const onChange = (e) => {
    setOption(e.target.value)

  }

  return (
    <>
      <Container>
        <div class="shop_list-search">
          <span
            onClick={() => {
              getData()
            }}
            style={{marginTop:'1rem'}}
          >
            <BsSearch fill="#a8d182"/>
            {/* <img src="http://localhost:3001/img/search.svg" alt="" /> */}
          </span>
          <input
            type="text"
            placeholder="Search"
            value={inputSearch}
            onChange={(e) => {
              setInputSearch(e.target.value)
            }}
          />
          <select onChange={onChange} value={Option} className="shop_list-order" style={{fontSize:'14px'}}>
            <option value="0">價錢由低至高</option>
            <option value="1">價錢由高至低</option>
            <option value="2">本月最熱銷</option>
            <option value="3">特價中</option>
          </select>
        </div>
      </Container>
    </>
  )
}
export default Search
