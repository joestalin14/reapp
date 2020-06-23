import React from 'react'

const getPrice = (type, formatedPrice) => {
  if (type === 'аренда') {
    return (
      <p className='price'>Цена: { formatedPrice } &#8381; / мес.</p>
    )
  }
  return <p className='price'>Цена: { formatedPrice } &#8381;</p>
}

const DachaDescription = ({ object }) => {
  const { floorsTotal,
          area,
          lotArea,
          bathroomUnit,
          formatedPrice,
          type } = object

  return (
    <div className='condition-description'>
      <p>Этажей: { floorsTotal }</p>
      <p>Площадь дома: { area }м<sup>2</sup></p>
      <p>Площадь участка: { lotArea }сот.</p>
      <p>Санузел: { bathroomUnit }</p>
      {
        getPrice(type, formatedPrice)
      }
    </div>
  )
}

export default DachaDescription
