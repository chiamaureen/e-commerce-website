import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function MemberMain(props) {
  return (
    <>
      <div className="container">
        <div className="row">{props.children}</div>
      </div>
    </>
  )
}

export default MemberMain
