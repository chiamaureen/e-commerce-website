import React, { useState } from 'react'
import Comment from '../components/comment/Comment'

function Home(props) {
  const { isAuth } = props
  return (
    <>
      <Comment isAuth={isAuth} />
    </>
  )
}

export default Home
