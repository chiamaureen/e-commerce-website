import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
function Nav(props) {
  const { setCategory } = props
  return (
    <>
      <div class="shop_list-nav">
        <ul>
          <li
            onClick={() => {
              setCategory(0)
            }}
          >
            全部商品
          </li>

          <li
            onClick={() => {
              setCategory(1)
            }}
          >
            身體清潔
          </li>
          <li
            onClick={() => {
              setCategory(2)
            }}
          >
            臉部保養
          </li>
          <li
            onClick={() => {
              setCategory(3)
            }}
          >
            頭髮護理
          </li>
          <li
            onClick={() => {
              setCategory(4)
            }}
          >
            彩妝
          </li>
        </ul>
      </div>
    </>
  )
}
export default Nav
