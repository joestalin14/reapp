import React from 'react'
import { withRouter } from 'react-router-dom'

import YaMap from '../yamap'
import RealtyFilters from '../realty-filters'
import RealtyListContainer from '../realty-list'

const HomePage = ({ history, match }) => {
  const { filters } = match.params

  return (
    <div className='home-page'>
      <YaMap />
      <div className='container'>
        <div className='row'>
          <RealtyFilters
            history={history}
          />
          <RealtyListContainer
            filters={filters}
            counterEnable
          />
        </div>
      </div>
    </div>
  )
}

export default withRouter(HomePage)
