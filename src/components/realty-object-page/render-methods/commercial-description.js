import React, { Fragment } from 'react'

const getPrice = (type, price, formatedPrice, area) => {
  if (type === 'аренда') {
    return (
      <p className='price'>Цена: { formatedPrice } &#8381; / мес.</p>
    )
  }
  return (
    <Fragment>
      <p className='price'>Цена: { formatedPrice } &#8381;</p>
      <p className='price-meter'>({ Math.floor(price / area) }&#8381; за м<sup>2</sup>)</p>
    </Fragment>
  )
}

const CommercialDescription = ({ object }) => {
  const { area,
          formatedPrice,
          price,
          type } = object

  return (
    <div className='condition-description'>
      <p>Общая площадь: { area }м<sup>2</sup></p>
      {
        getPrice(type, price, formatedPrice, area)
      }
    </div>
  )
}

export default CommercialDescription
