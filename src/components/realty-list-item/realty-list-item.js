import React from 'react'
import { Link } from 'react-router-dom'

import './realty-list-item.sass'

import RealtyItemHeader from '../realty-item-header'

const RealtyListItem = ({ realtyItem }) => {
  const { images,
          localityName,
          district,
          address,
          formatedPrice,
          phone,
          formatedPhone,
          id } = realtyItem

  let imageUrl = null
  if (typeof images === 'string') {
    imageUrl = images
  } else if (images && typeof images !== 'string') {
    imageUrl = images[0]
  } else {
    imageUrl = './noimage.jpg'
  }

  return (
    <div className='realty-list-item'>
      <div className='realty-cover'>
        <img
          src={imageUrl}
          alt='realty cover'
        />
      </div>
      <div className='realty-details'>
        <RealtyItemHeader realtyItem={realtyItem} headerLevel={5} />
        <p>{ localityName }, { district } { address }</p>
        <p className='price'>{ formatedPrice } &#8381;</p>
        <a
          className='btn btn-danger'
          href={`tel:${phone}`}>
          { formatedPhone }
        </a>
        <Link
          to={`/object:${id}`}
          className='btn btn-warning'>
          Подробнее
        </Link>
      </div>
    </div>
  )
}

export default RealtyListItem
