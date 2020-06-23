import React, { Fragment } from 'react'

import {
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

const DormRoomFilters = ({ onSubFilterChange, onNumericDataChange, history }) => {
  return (
    <Fragment>
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

export default DormRoomFilters
