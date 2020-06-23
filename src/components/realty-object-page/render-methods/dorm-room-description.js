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

const DormRoomDescription = ({ object }) => {
  const { floor,
          floorsTotal,
          area,
          livingSpace,
          rooms,
          renovation,
          bathroomUnit,
          price,
          formatedPrice,
          type } = object

  return (
    <div className='condition-description'>
      <p>{ floor } этаж из { floorsTotal }</p>
      <p>Общая площадь: { area }м<sup>2</sup>, Площадь комнаты: { livingSpace }м<sup>2</sup></p>
      <p>Всего комнат: { rooms }</p>
      <p>Ремонт: { renovation }</p>
      <p>Санузел: { bathroomUnit }</p>
      {
        getPrice(type, price, formatedPrice, livingSpace)
      }
    </div>
  )
}

export default DormRoomDescription
