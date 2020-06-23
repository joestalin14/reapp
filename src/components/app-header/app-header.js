import React from 'react'
import { Link } from 'react-router-dom'

import './app-header.sass'

const AppHeader = () => {
  return (
    <nav className='app-header navbar fixed-top navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <a
          className='navbar-brand'
          href='/'>
          <img
            src='/reapp-logo.svg'
            alt='logo' />
        </a>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link
                className='nav-link'
                to='/specialists'>
                Специалисты
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default AppHeader
