import React, { Component } from 'react'

export default class DropdownFilters extends Component {

  id = 0

  state = {
    selectedFilter: this.props.baseFilter
  }

  componentDidMount () {
    if (this.props.history) {
      const path = this.props.history.location.pathname
      this.props.items.map(({ dataType, dataLabel, uiLabel }) => {
        if (path.includes(dataLabel)) {
          this.changeSelectedFilter(uiLabel)
        } 
        return null
      })
    }
  }

  changeSelectedFilter = (string) => {
    this.setState({
      selectedFilter: string
    })
  }

  render () {

    const { selectedFilter } = this.state
    const { items } = this.props

    return (
      <div className='dropdown'>
        <button className='btn btn-danger dropdown-toggle'
          type='button'
          id='dropdownMenu1'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'>
          { selectedFilter }
        </button>
        <div
          className='dropdown-menu'
          aria-labelledby='dropdownMenu1'>
          {
            items.map(({ dataType, dataLabel, uiLabel }) => {
              return (
                <div
                  key={this.id++}
                  className='dropdown-item'
                  onClick={() => {
                    this.props.onSubFilterChange(dataType, dataLabel)
                    this.changeSelectedFilter(uiLabel)
                  }}>
                  { uiLabel }
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
