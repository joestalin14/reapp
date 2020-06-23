import React, { Fragment } from 'react'

import {
  BtnGroupFilters,
  DropdownFilters,
  NumericDataFilters
} from '../render-methods'

const subLocalityData = [
  { dataType: 'subLocalityName', dataLabel: 'Коминтерновский район', uiLabel: 'Коминтерновский район' },
  { dataType: 'subLocalityName', dataLabel: 'Центральный район', uiLabel: 'Центральный район' },
  { dataType: 'subLocalityName', dataLabel: 'Левобережный район', uiLabel: 'Левобережный район' },
  { dataType: 'subLocalityName', dataLabel: 'Железнодорожный район', uiLabel: 'Железнодорожный район' },
  { dataType: 'subLocalityName', dataLabel: 'Советский район', uiLabel: 'Советский район' }
]

const roomsData = [
  { dataType: 'rooms', dataLabel: '1', uiLabel: '1' },
  { dataType: 'rooms', dataLabel: '2', uiLabel: '2' },
  { dataType: 'rooms', dataLabel: '3', uiLabel: '3' },
  { dataType: 'rooms', dataLabel: '4', uiLabel: '4' },
  { dataType: 'rooms', dataLabel: '5+', uiLabel: '5+' }
]

const FlatFilters = ({ onSubFilterChange, onNumericDataChange, history }) => {
  return (
    <Fragment>
      <BtnGroupFilters
        items={roomsData}
        onSubFilterChange={onSubFilterChange}
        history={history}
      />
      <DropdownFilters
        baseFilter={'Выберите район'}
        items={subLocalityData}
        onSubFilterChange={onSubFilterChange}
        history={history}
      />
      <h6>Площадь:</h6>
      <NumericDataFilters
        onNumericDataChange={onNumericDataChange}
        strMin={'areaMin'}
        strMax={'areaMax'}
        history={history}
      />
    </Fragment>
  )
}

export default FlatFilters
