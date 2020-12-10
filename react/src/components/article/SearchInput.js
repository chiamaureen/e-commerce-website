import React, { useState } from 'react'
import './css/SearchInput.css'

function SearchInput(props) {
  const {
    sendData,
    searchData,
    setSearchData,
    inputSearch,
    setinputSearch,
  } = props

  // const sendData = async()=>{
  // const res=  await fetch('http://localhost:3000/article/forSearch',{
  //   method: 'POST',
  //   headers: new Headers({
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   }),
  //   body: JSON.stringify({inputSearch: inputSearch}),

  // })
  // const data =  await res.json()
  // setSearchData(data)
  // }
  console.log(inputSearch)
  return (
    <>
      <div className="searchInput">
        <i
          onClick={() => {
            sendData(inputSearch)
          }}
          className="fas fa-search"
        ></i>
        <input
          className="arInput"
          value={inputSearch}
          onChange={(e) => {
            sendData(e.target.value)
          }}
          type="text"
          placeholder="關鍵字搜尋"
        />
      </div>
    </>
  )
}

export default SearchInput
