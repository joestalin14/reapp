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

const FlatDescription = ({ object }) => {
  const { floor,
          floorsTotal,
          area,
          livingSpace,
          kitchenSpace,
          renovation,
          bathroomUnit,
          price,
          formatedPrice,
          type } = object

  return (
    <div className='condition-description'>
      <p>{ floor } этаж из { floorsTotal }</p>
      <p>Общая площадь: { area }м<sup>2</sup>, Жилая площадь: { livingSpace }м<sup>2</sup>, Кухня: { kitchenSpace }м<sup>2</sup></p>
      <p>Ремонт: { renovation }</p>
      <p>Санузел: { bathroomUnit }</p>
      {
        getPrice(type, price, formatedPrice, area)
      }
    </div>
  )
}

export default FlatDescription
