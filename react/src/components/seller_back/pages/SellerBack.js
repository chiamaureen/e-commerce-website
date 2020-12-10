import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import '../Navbar.scss'
import '../../../styles/variable.scss'
import Containers from '../Containers'
import Footers from '../Footers'
function SellerBack(props) {
  console.log(props)
  return (
    <Router>
      <Containers />
      <Footers />
    </Router>
  )
}

export default SellerBack
