import React, { useState } from 'react'
import CoursePagination from './CoursePagination'
import { useHistory } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

function TopCourse(props) {
  let history = useHistory()
  const { mydata } = props
  //設定頁碼
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(3)
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage

  const currentPosts = mydata.slice(indexOfFirstPost, indexOfLastPost)
  console.log(mydata)
  const paginate = (number) => {
    setCurrentPage(number)
  }
  let display = currentPosts.map((v, i) => {
    return (
      <div class="up-left" key={i}>
        <div class="up-left-in">
          <div class="up-left-in-left">
            <img
              src={'http://localhost:3001/IMG/CourseList/' + v.pic_big}
              alt=""
            />
          </div>
          <div class="up-left-in-right">
            <h3 class="up-left-in-right-h3">{v.title}</h3>
            <h4 class="up-left-in-right-h4">{v.sub_title}</h4>
            <button
              class="up-button"
              onClick={() => {
                history.push(`/CourseDetail/${v.sid}`)
              }}
            >
              <h3 class="up-button-h3">活動介紹</h3>
            </button>
          </div>
        </div>
      </div>
    )
  })

  //設定查無資料的顯示
  const noData = (
    <div class="window-refresh" onClick={refreshPage}>
      <h4 class="window-refresh-h4">
        查無資料，請重新輸入，或點此警語刷新頁面
      </h4>
    </div>
  )

  function refreshPage() {
    window.location.reload(false)
  }

  return (
    <>
      <div>
        {display.length !== 0 ? display : noData}
        <CoursePagination
          postsPerPage={postsPerPage}
          totalPosts={mydata.length}
          paginate={paginate}
        />
      </div>
    </>
  )
}

export default withRouter(TopCourse)
