import React from 'react'
import { Link } from 'react-router-dom'

import './specialist-list-item.sass'

const SpecialistListItem = ({ data }) => {
  const { agent,
          phone,
          formatedPhone,
          id } = data

  return (
    <div className='specialist-list-item'>
      <div className='text'>
        <h5>{ agent }</h5>
        <a className='btn btn-warning'
          href={`tel:${phone}`}>
          { formatedPhone }
        </a>
        <Link className='btn btn-danger'
          to={`./specialists/${id}`}>
          Подробнее
        </Link>
      </div>
    </div>
  )
}

export default SpecialistListItem
