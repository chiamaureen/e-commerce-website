import React, { useState, useEffect } from 'react'
function CourseSearch(props) {
  const { getData, setInputSearch, inputSearch } = props

  return (
    <>
      <div class="top-100"></div>
      <div class="top-title">
        <div class="top-title-in">
          <h2 class="top-title-in-h2">
            人類對環境的傷害往往來自於漠視與無感。因此面對現今的環境問題，最終仍須回到與「人」的溝通。
            <br />
            艸艸相信，理解與使用友善環境產品，可以觸動人心、轉變價值觀並實踐友善環境的承諾。
          </h2>
        </div>
      </div>
      <div class="top-50-green">
        <div class="course-search">
          <input
            type="text"
            class="course-type"
            value={inputSearch}
            placeholder="請輸入關鍵字或年月，例如YYYY-MM"
            onChange={(e) => {
              setInputSearch(e.target.value)
            }}
          />
          <button class="course-submit" onClick={getData}>
            查詢
          </button>
        </div>
      </div>
    </>
  )
}
export default CourseSearch
