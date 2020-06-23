import React from 'react'

import './realty-item-header.sass'

const RealtyItemHeader = ({ realtyItem, headerLevel }) => {
  const { category,
          area,
          lotArea,
          lotType,
          rooms,
          type } = realtyItem

  const HeaderLevel = `h${headerLevel}`

  switch (category) {
    case 'квартира':
      return <HeaderLevel>{ rooms }-комнатная { category }, { area } м<sup>2</sup></HeaderLevel>
    case 'комната':
      return <HeaderLevel>{ area } м<sup>2</sup>, { category }</HeaderLevel>
    case 'дом':
      return <HeaderLevel>{ area } м<sup>2</sup>, { category } на участке { lotArea } сот.</HeaderLevel>
    case 'часть дома':
      return <HeaderLevel>{ area } м<sup>2</sup>, { category } на участке { lotArea } сот.</HeaderLevel>
    case 'дача':
      return <HeaderLevel>{ area } м<sup>2</sup>, { category } на участке { lotArea } сот.</HeaderLevel>
    case 'гараж':
      return <HeaderLevel>{ category } { area } м<sup>2</sup></HeaderLevel>
    case 'коммерческая':
      return <HeaderLevel>Помещение { area } м<sup>2</sup>, { type }</HeaderLevel>
    case 'участок':
      return <HeaderLevel>{ category } { lotType } { lotArea } сот.</HeaderLevel>
    default:
      return <HeaderLevel>Неизвестный объект</HeaderLevel>
  }
}

export default RealtyItemHeader
