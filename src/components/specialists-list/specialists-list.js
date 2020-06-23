import React, { Component } from 'react'

import { withRealtyService } from '../hoc'
import Spinner from '../spinner'
import SpecialistListItem from '../specialist-list-item'

import './specialists-list.sass'

class SpecialistsList extends Component {

  state = {
    specialists: null
  }

  componentDidMount () {
    this.props.realtyService
      .getSpecialists()
      .then((specialists) => {
        this.setState({ specialists })
      })
  }
  
  render () {
    const { specialists } = this.state

    if (!specialists) {
      return <Spinner />
    }
    
    return (
      <div className='specialists-list row'>
        {
          specialists.map((data) => {
            const { agent, id } = data
            if (!agent) return null
            return (
              <div 
                className='col-md-4'
                key={id}>
                <SpecialistListItem data={data} />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default withRealtyService(SpecialistsList)
