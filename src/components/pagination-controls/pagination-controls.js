import React, { Fragment } from 'react'

const PaginationControls = ({ currentPage, pageCount, setCurrentPage }) => {
  const getNumControls = (currentPage, pageCount) => {
    if (currentPage >= 1 && currentPage < pageCount - 1 && pageCount > 2) {
      return (
        <Fragment>
          <div
            className='btn btn-danger'
            onClick={() => {
              setCurrentPage(currentPage)
              window.scrollTo(0, 400)
            }}>
            { currentPage }
          </div>
          <div
            className='btn btn-outline-danger'
            onClick={() => {
              setCurrentPage(currentPage + 1)
              window.scrollTo(0, 400)
            }}>
            { currentPage + 1 }
          </div>
          <div
            className='btn btn-outline-danger'
            onClick={() => {
              setCurrentPage(pageCount)
              window.scrollTo(0, 400)
            }}>
            { pageCount }
          </div>
        </Fragment>
      )
    } else if (currentPage === pageCount - 1 && pageCount > 2) {
      return (
        <Fragment>
          <div
            className='btn btn-outline-danger'
            onClick={() => {
              setCurrentPage(1)
              window.scrollTo(0, 400)
            }}>
            1
          </div>
          <div
            className='btn btn-danger'
            onClick={() => {
              setCurrentPage(currentPage)
              window.scrollTo(0, 400)
            }}>
            { currentPage }
          </div>
          <div
            className='btn btn-outline-danger'
            onClick={() => {
              setCurrentPage(currentPage + 1)
              window.scrollTo(0, 400)
            }}>
            { currentPage + 1 }
          </div>
        </Fragment>
      )
    } else if (pageCount === 2 && currentPage === 1) {
      return (
        <Fragment>
          <div
            className='btn btn-danger'
            onClick={() => {
              setCurrentPage(1)
              window.scrollTo(0, 400)
            }}>
            { 1 }
          </div>
          <div
            className='btn btn-outline-danger'
            onClick={() => {
              setCurrentPage(currentPage + 1)
              window.scrollTo(0, 400)
            }}>
            { currentPage + 1 }
          </div>
        </Fragment>
      )
    } else if (pageCount === 2 && currentPage === 2) {
      return (
        <Fragment>
          <div
            className='btn btn-outline-danger'
            onClick={() => {
              setCurrentPage(1)
              window.scrollTo(0, 400)
            }}>
            { 1 }
          </div>
          <div
            className='btn btn-danger'
            onClick={() => {
              setCurrentPage(2)
              window.scrollTo(0, 400)
            }}>
            { 2 }
          </div>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <div
            className='btn btn-outline-danger'
            onClick={() => {
              setCurrentPage(1)
              window.scrollTo(0, 400)
            }}>
            1
          </div>
          <div
            className='btn btn-outline-danger'
            onClick={() => {
              setCurrentPage(currentPage - 1)
              window.scrollTo(0, 400)
            }}>
            { currentPage - 1 }
          </div>
          <div
            className='btn btn-danger'
            onClick={() => {
              setCurrentPage(currentPage)
              window.scrollTo(0, 400)
            }}>
            { currentPage }
          </div>
        </Fragment>
      )
    }
  }

  return (
    <div className='btn-group pagination-controls'>
      <div
        className='btn btn-outline-danger'
        onClick={() => {
          if (currentPage > 1) {
            setCurrentPage(1)
            window.scrollTo(0, 400)
          }
        }}>
        <i className='fa fa-angle-double-left' />
      </div>
      <div
        className='btn btn-outline-danger'
        onClick={() => {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
            window.scrollTo(0, 400)
          }
        }}>
        <i className='fa fa-angle-left' />
      </div>
      { getNumControls(currentPage, pageCount) }
      <div
        className='btn btn-outline-danger'
        onClick={() => {
          if (currentPage < pageCount) {
            setCurrentPage(currentPage + 1)
            window.scrollTo(0, 400)
          }
        }}>
        <i className='fa fa-angle-right' />
      </div>
      <div
        className='btn btn-outline-danger'
        onClick={() => {
          if (currentPage < pageCount) {
            setCurrentPage(pageCount)
            window.scrollTo(0, 400)
          }
        }}>
        <i className='fa fa-angle-double-right' />
      </div>
    </div>
  )
}

export default PaginationControls
