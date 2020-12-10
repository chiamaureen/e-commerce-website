import { useParams, useHistory, withRouter } from 'react-router-dom'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Form } from 'react-bootstrap'

function BodyCourseSubmit(props) {
  const history = useHistory()
  // let { id } = useParams()
  // const { data } = props
  // const myData = id && data && data[id - 1]

  let display = ''
  display = (
    <div class="course-submit-form">
      <Form class="form-horizontal">
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>
            親愛的會員您好，感謝您報名參加活動，請協助填妥以下資訊
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>報名參加活動</Form.Label>
          <Form.Control as="select">
            <option>
              1--世外桃源的香草革命：有機香草體驗課程--活動費用：500/人
            </option>
            <option>
              2--屏東四林國小：參觀校田、烘焙麵包活動--活動費用：500/人
            </option>
            <option>
              3--卑南藥草植物園食療火鍋、鹿野小農市集體驗旅遊--活動費用：500/人
            </option>
            <option>4--五峰鄉林場一日體驗遊--活動費用：500/人</option>
            <option>5--東山國小田間生態體驗--活動費用：500/人</option>
            <option>
              6--南港區椿萱農場生態園區與窯烤體驗--活動費用：500/人
            </option>
            <option>7--東石鄉生態養殖魚場體驗一日漁夫--活動費用：500/人</option>
            <option>
              8--百年穿龍圳與樹重奏農場生態體驗之旅--活動費用：500/人
            </option>
            <option>
              9--吉安鄉明淳有機農場採絲瓜秋葵體驗--活動費用：500/人
            </option>
            <option>
              10--高雄縣六龜鄉荖濃溪網室木瓜園一日體驗--活動費用：500/人
            </option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>報名人數</Form.Label>
          <Form.Control as="select">
            <option>1人</option>
            <option>2人</option>
            <option>3人</option>
            <option>4人</option>
            <option>5人</option>
            <option>6人</option>
            <option>7人</option>
            <option>8人</option>
            <option>9人</option>
            <option>10人</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput2">
          <Form.Label>總計金額_500_元</Form.Label>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput3">
          <Form.Label>
            報名提醒：由於活動名額有限，請儘早確認人數並完成匯款，提交報名表單，經公司確認回覆報名成功，始完成報名程序，不便之處敬請見諒。報名費請匯至以下帳號：銀行名稱：第一銀行建城分行，銀行代碼：007，銀行帳號：121－10－100100，戶名：艸艸了事有限公司
          </Form.Label>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput4">
          <Form.Label>匯款人大名</Form.Label>
          <Form.Control type="input" placeholder="王小明" />
          <Form.Label>匯款銀行/代碼</Form.Label>
          <Form.Control type="input" placeholder="第一銀行/代碼：007" />
          <Form.Label>匯款帳號後五碼</Form.Label>
          <Form.Control type="input" placeholder="41481" />
          <Form.Label>手機號碼</Form.Label>
          <Form.Control type="input" placeholder="0912345678" />
          <Form.Label>電子郵件信箱</Form.Label>
          <Form.Control type="email" placeholder="xiaoming@gmail.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>備註</Form.Label>
          <Form.Control as="textarea" rows={2} />
        </Form.Group>
        <div class="submit-form-actions">
          <button
            type="submit"
            class="button-submit"
            onClick={() => {
              history.push(`/CourseList`)
            }}
          >
            確定送出
          </button>
          <button
            class="button-cancel"
            onClick={() => {
              history.push(`/CourseList`)
            }}
          >
            取消，回到上一頁
          </button>
        </div>
      </Form>
    </div>
  )
  return <>{display}</>
}

export default withRouter(BodyCourseSubmit)
