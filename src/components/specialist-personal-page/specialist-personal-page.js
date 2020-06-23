import React, { Component } from 'react'

import './specialist-personal-page.sass'

import { withRealtyService } from '../hoc'
import Spinner from '../spinner'
import RealtyListContainer from '../realty-list'

class SpecialistPersonalPage extends Component {
  state = {
    data: null,
    specialist: null
  }

  componentDidMount () {
    this.props.realtyService
      .getSpecialists()
      .then((data) => {
        const specialist = data.find((item) => item.id === this.props.id)
        this.setState({ specialist })
      })
    this.props.realtyService
      .getRealty()
      .then((data) => {
        this.setState({ data })
      })
  }

  render () {
    const { data } = this.state

    if (!data) {
      return <Spinner />
    }

    const { agent,
            phone,
            formatedPhone,
            email } = this.state.specialist

    return (
      <div className='specialist-personal-page container'>
        <div className='row'>
          <div className='col-md-3 about'>
            <h1>{ agent }</h1>
            <a href={`tel:${phone}`}>{ formatedPhone }</a>
            <p>{ email }</p>
          </div>
          <RealtyListContainer
            filters={`email=${email}&`}
          />
        </div>
      </div>
    )
  }
}

export default withRealtyService(SpecialistPersonalPage)
