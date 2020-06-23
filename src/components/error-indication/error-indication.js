import React from 'react'

import './error-indication.sass'

const ErrorIndication = () => {
  return (
    <div
      className='alert alert-danger'
      role='alert'>
      <h4 className='alert-heading'>К сожалению произошла ошибка</h4>
      Но мы уже работаем над ее устранением
    </div>
  )
}

export default ErrorIndication
