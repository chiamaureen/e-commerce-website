import React, { useState, useEffect } from 'react'
import './../css/DropDownIcon.css'
function DropDownIcon() {
  const [state, setState] = useState('')

  return (
    <>
      <div className="dropIcon">
        <button className="drop">
          <i className="fas fa-angle-double-down"></i>
        </button>
      </div>
    </>
  )
}

export default DropDownIcon
