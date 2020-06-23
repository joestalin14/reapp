import React, { Component } from 'react'

export default class BtnGroupFilters extends Component {

  state = {
    activeBtn: null
  }

  componentDidMount () {
    if (this.props.history) {
      const path = this.props.history.location.pathname
      this.props.items.map(({ dataType, dataLabel }, index) => {
        if (path.includes(`${dataType}=${dataLabel}`)) {
          const activeLabel = `btn${index}`
          this.makeActive(activeLabel)
        }
        return null
      })
    }
  }

  makeActive = (str) => {
    this.setState({
      activeBtn: str
    })
  }
  
  render () {
    const { items } = this.props
    
    return (
      <div
        className='btn-group'
        role='group'
        aria-label='Basic example'>
        {
          items.map(({ dataType, dataLabel, uiLabel }, index) => {
            const activeLabel = `btn${index}`

            const isActive = this.state.activeBtn === activeLabel
            let classNames = 'btn'
            switch (isActive) {
              case true:
                classNames += ' btn-outline-danger'
                break;
              default:
                classNames += ' btn-danger'
            }
            
            return (
              <button
                key={index}
                type='button'
                className={classNames}
                onClick={() => {
                  this.props.onSubFilterChange(dataType, dataLabel)
                  this.makeActive(activeLabel)
                }}>
                {uiLabel}
              </button>
            )
          })
        }
      </div>
    )
  }
}
