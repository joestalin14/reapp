import React from 'react'

import { RealtyConsumer } from '../realty-service-context'

const withRealtyService = (Wrapped) => {
  return (props) => {
    return (
      <RealtyConsumer>
        {
          (realtyService) => {
            return (
              <Wrapped
                {...props}
                realtyService={realtyService}
              />
            )
          }
        }
      </RealtyConsumer>
    )
  }
}

export default withRealtyService
