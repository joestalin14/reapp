import React from 'react'

import './spinner.sass'

const Spinner = () => {
  return (
    <div className='d-flex align-items-center'>
      <strong>Loading...</strong>
      <div
        className='spinner-grow text-warning ml-auto'
        role='status' />
    </div>
  )
}

export default Spinner
