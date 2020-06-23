import React from 'react'

const getPrice = (type, formatedPrice) => {
  if (type === 'аренда') {
    return (
      <p className='price'>Цена: { formatedPrice } &#8381; / мес.</p>
    )
  }
  return <p className='price'>Цена: { formatedPrice } &#8381;</p>
}

const LotDescription = ({ object }) => {
  const { lotArea,
          lotType,
          formatedPrice,
          type } = object

  return (
    <div className='condition-description'>
      <p>Площадь участка: { lotArea }сот.</p>
      <p>Тип: { lotType }</p>
      {
        getPrice(type, formatedPrice)
      }
    </div>
  )
}

export default LotDescription
