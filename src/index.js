import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/app'
import ErrorBoundry from './components/error-boundry'
import RealtyService from './services/realty-service'
import { RealtyProvider } from './components/realty-service-context'

const realtyService = new RealtyService()

ReactDOM.render(
  <ErrorBoundry>
    <RealtyProvider value={realtyService}>
      <Router>
        <App />
      </Router>
    </RealtyProvider>
  </ErrorBoundry>
, document.querySelector('#root'))
