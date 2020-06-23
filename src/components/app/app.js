import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './app.sass'

import AppHeader from '../app-header'
import {
  HomePage,
  SpecialistsPage } from '../pages'
import RealtyObjectPage from '../realty-object-page'
import SpecialistPersonalPage from '../specialist-personal-page'

const App = () => {
  return (
    <div className='app'>
      <AppHeader />
      <Switch>
        <Route
          path={`/object:id`}
          render={({match}) => {
            const { id } = match.params
            return <RealtyObjectPage itemId={id} />
          }}
          exact
        />
        <Route
          path='/specialists/'
          component={SpecialistsPage}
          exact
        />
        <Route
          path='/specialists/:id?'
          render={({match}) => {
            const { id } = match.params
            return <SpecialistPersonalPage id={id} />
          }}
          exact
        />
        <Route
          path='/:filters?'
          component={HomePage}
          exact
        />
      </Switch>
    </div>
  )
}

export default App
