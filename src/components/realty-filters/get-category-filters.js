import React from 'react'

import {
  DormRoomFilters,
  FlatFilters,
  LotFilters,
  DachaFilters,
  CommercialFilters,
  GarageFilters,
  HouseFilters,
  PartOfTheHouseFilters
} from './category-filters'

const getCategoryFilters = (selectedCategory, onSubFilterChange, onNumericDataChange, history) => {
  switch (selectedCategory) {
    case 'Квартиры':
      return (
        <FlatFilters
          onSubFilterChange={onSubFilterChange}
          onNumericDataChange={onNumericDataChange}
          history={history}
        />
      )
    case 'Комнаты':
      return (
        <DormRoomFilters
          onSubFilterChange={onSubFilterChange}
          onNumericDataChange={onNumericDataChange}
          history={history}
        />
      )
    case 'Дома':
      return (
        <HouseFilters
          onNumericDataChange={onNumericDataChange}
          history={history}
        />
      )
    case 'Дачи':
      return (
        <DachaFilters
          onNumericDataChange={onNumericDataChange}
          history={history}
        />
      )
    case 'Часть дома':
      return (
        <PartOfTheHouseFilters
          onNumericDataChange={onNumericDataChange}
          history={history}
        />
      )
    case 'Участки':
      return (
        <LotFilters
          onSubFilterChange={onSubFilterChange}
          onNumericDataChange={onNumericDataChange}
          history={history}
        />
      )
    case 'Гаражи':
      return (
        <GarageFilters
          onSubFilterChange={onSubFilterChange}
          history={history}
        />
      )
    case 'Коммерческая':
      return (
        <CommercialFilters
          onSubFilterChange={onSubFilterChange}
          history={history}
        />
      )
    default:
      return null
  }
}

export default getCategoryFilters
