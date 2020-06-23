import React from 'react'

const getPrice = (type, formatedPrice) => {
  if (type === 'аренда') {
    return (
      <p className='price'>Цена: { formatedPrice } &#8381; / мес.</p>
    )
  }
  return <p className='price'>Цена: { formatedPrice } &#8381;</p>
}

const GarageDescription = ({ object }) => {
  const { area,
          formatedPrice,
          type } = object

  return (
    <div className='condition-description'>
      <p>Общая площадь: { area }м<sup>2</sup></p>
      {
        getPrice(type, formatedPrice)
      }
    </div>
  )
}

export default GarageDescription
