import React from 'react'

import SpecialistsList from '../specialists-list'

const styles = {
  marginTop: '80px'
}

const SpecialistsPage = () => {
  return (
    <div
      className='specialists-page'
      style={styles}>
      <div className='container'>
        <h1>Специалисты компании</h1>
        <SpecialistsList />
      </div>
    </div>
  )
}

export default SpecialistsPage
