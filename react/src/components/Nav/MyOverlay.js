import React, { useState } from 'react'
// import './Dropdown.css'
import { Link } from 'react-router-dom'
import { Button, Popover, Overlay } from 'react-bootstrap'
import Login from '../../pages/Login'
import { withRouter } from 'react-router-dom'

function MyOverlay(props) {
  const [show, setShow] = useState(false)
  const [target, setTarget] = useState(null)
  //   const ref = useRef(null)
  const { loginModalShow, setLoginModalShow, setisAuth, isAuth } = props

  const handleClick = (event) => {
    setShow(!show)
    setTarget(event.target)
  }

  return (
    // <div ref={ref}>
    <div>
      <i
        className="fas fa-user"
        style={{
          width: '36px',
          fontSize: '1.5rem',
          color: '#a8d182',
          marginRight: '10px',
          marginLeft: '10px',
          paddingTop: '7px',
        }}
        onClick={handleClick}
      ></i>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        // container={ref.current}
        containerPadding={20}
      >
        <Popover id="popover-contained" style={{ padding: '0.5rem' }}>
          {/* <Popover.Title as="h3"> */}
          <Login
            loginModalShow={loginModalShow}
            setLoginModalShow={setLoginModalShow}
            setisAuth={setisAuth}
            isAuth={isAuth}
          />
          {/* </Popover.Title> */}

          <Popover.Content>
            <p
              onClick={() => {
                props.history.push('/memberroot/aboutme')
              }}
              style={{margin:'0'}}
            >
              會員中心
            </p>
          </Popover.Content>
        </Popover>
      </Overlay>
    </div>
  )
}

export default withRouter(MyOverlay)
