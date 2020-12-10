import React from 'react'
import { Pagination } from 'react-bootstrap'

const CoursePagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul class="course-pagination">
        {pageNumbers.map((number) => (
          <Pagination.Item key={number}>
            <a onClick={() => paginate(number)}>{number}</a>
          </Pagination.Item>
        ))}
      </ul>
    </nav>
  )
}

export default CoursePagination
