import React from 'react'
import { Pagination } from 'react-bootstrap'

function Mypagination(props) {
  const {
    postsPerPage,
    totalComment,
    paginate,
    currentPage,
    setCurrentPage,
  } = props

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalComment / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  const nextPage = () => setCurrentPage(currentPage + 1)

  const prevPage = () => setCurrentPage(currentPage - 1)
  return (
    <Pagination className=" justify-content-center">
      <li className="page-item">
        {/* <a className="page-link" href="#" onClick={() => prevPage()}>
          Previous
        </a> */}
      </li>
      {pageNumbers.map((number) => (
        <Pagination.Item
          key={number}
          className={number === currentPage ? 'active' : ''}
        >
          <a onClick={() => paginate(number)}>{number}</a>
        </Pagination.Item>
      ))}
      <li className="page-item">
        {/* <a className="page-link" href="#" onClick={() => nextPage()}>
          Next
        </a> */}
      </li>
    </Pagination>
  )
  // const pageNumbers = []

  // for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
  //   pageNumbers.push(i)
  // }

  // return (
  //   <nav>
  //     <ul className="pagination">
  //       {pageNumbers.map((number) => (
  //         <Pagination.Item key={number}>
  //           <a onClick={() => paginate(number)}>{number}</a>
  //         </Pagination.Item>
  //       ))}
  //     </ul>
  //   </nav>
  // )
}

export default Mypagination
