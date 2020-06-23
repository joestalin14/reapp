import React, { Fragment } from 'react'

import {
  NumericDataFilters
} from '../render-methods'

const HouseFilters = ({ onNumericDataChange, history }) => {
  return (
    <Fragment>
      <h6>Площадь дома:</h6>
      <NumericDataFilters
        onNumericDataChange={onNumericDataChange}
        strMin={'areaMin'}
        strMax={'areaMax'}
        history={history}
      />
      <h6>Площадь участка (сот):</h6>
      <NumericDataFilters
        onNumericDataChange={onNumericDataChange}
        strMin={'lotMin'}
        strMax={'lotMax'}
        history={history}
      />
    </Fragment>
  )
}

export default HouseFilters
