import React, { useState, useRef } from 'react'

function DropdownMenu(props) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <li className="nav-item">
        <a href="/123" className="icon-button" onClick={() => setOpen(!open)}>
          {props.icon}
        </a>

        {open && props.children}
      </li>
    </div>
  )
}

export default DropdownMenu
