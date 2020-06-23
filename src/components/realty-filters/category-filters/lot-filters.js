import React, { Fragment } from 'react'

import {
  NumericDataFilters,
  BtnGroupFilters } from '../render-methods'

const lotTypes = [
  { dataType: 'lotType', dataLabel: 'ИЖC', uiLabel: 'ИЖС' },
  { dataType: 'lotType', dataLabel: 'садоводство', uiLabel: 'Садоводство' }
]

const LotFilters = ({ onSubFilterChange, onNumericDataChange, history }) => {
  return (
    <Fragment>
      <h6>Назначение:</h6>
      <BtnGroupFilters
        items={lotTypes}
        onSubFilterChange={onSubFilterChange}
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

export default LotFilters
