import { useHistory } from 'react-router-dom'

function BodyCourse(props) {
  let history = useHistory()
  const { data } = props
  console.log(data)
  let display = ''
  display =
    data &&
    data.map((v, i) => {
      return (
        <div class="list-down" key={i}>
          <div class="list-down-left">
            <img
              src={'http://localhost:3001/IMG/CourseList/' + v.pic_big}
              // src={v.img}
              alt=""
              width="466px"
            />
          </div>

          <div class="list-down-right">
            <h3 class="down-right-h3">{v.title}</h3>
            <h4 class="down-right-h4">{v.sub_title}</h4>
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
      )
    })

  return (
    <>
      <div class="mid-title-in">
        <h3 class="top-title-in-h3">更多精選課程</h3>
      </div>

      {display}
    </>
  )
}

export default BodyCourse
