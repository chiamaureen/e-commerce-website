/* eslint-disable prettier/prettier */
import ReactStars from 'react-rating-stars-component'
import React from 'react'

function Star(props) {
    const { v } = props
    return (
        <ReactStars
            count={5}
            size={24}
            activeColor="#95C375"
            value={v.star}
            edit={false}
        />
    )
}
export default Star
