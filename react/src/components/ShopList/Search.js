import Container from 'react-bootstrap/Container'
import React, { useState, useEffect } from 'react'
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
          >
            <img src="http://localhost:3001/img/search.svg" alt="" />{' '}
          </span>
          <input
            type="text"
            placeholder="Search"
            value={inputSearch}
            onChange={(e) => {
              setInputSearch(e.target.value)
            }}
          />
          <select onChange={onChange} value={Option} class="shop_list-order">
            <option value="0">價錢由高至低</option>
            <option value="1">價錢由低至高</option>
            <option value="2">本月最熱銷</option>
            <option value="3">特價中</option>
          </select>
        </div>
      </Container>
    </>
  )
}
export default Search
