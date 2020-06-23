import React, { Fragment } from 'react'

import {
  DropdownFilters
} from '../render-methods'

const subLocalityData = [
  { dataType: 'subLocalityName', dataLabel: 'Коминтерновский район', uiLabel: 'Коминтерновский район' },
  { dataType: 'subLocalityName', dataLabel: 'Центральный район', uiLabel: 'Центральный район' },
  { dataType: 'subLocalityName', dataLabel: 'Левобережный район', uiLabel: 'Левобережный район' },
  { dataType: 'subLocalityName', dataLabel: 'Железнодорожный район', uiLabel: 'Железнодорожный район' },
  { dataType: 'subLocalityName', dataLabel: 'Советский район', uiLabel: 'Советский район' }
]

const CommercialFilters = ({ onSubFilterChange, history }) => {
  return (
    <Fragment>
      <DropdownFilters
        baseFilter={'Выберите район'}
        items={subLocalityData}
        onSubFilterChange={onSubFilterChange}
        history={history}
      />
    </Fragment>
  )
}

export default CommercialFilters
