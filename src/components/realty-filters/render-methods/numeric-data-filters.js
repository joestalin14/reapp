import React, { Component } from 'react'

class NumericDataFilters extends Component {

  state = {
    minValue: -Infinity,
    maxValue: Infinity
  }

  componentDidMount () {
    if (this.props.history) {
      const path = this.props.history.location.pathname
      const { strMin, strMax } = this.props
      if (path.includes(strMin)) {
        const historyArr = path.slice(1).split('&')
        historyArr.map((item) => {
          const subArr = item.split('=')
          if (subArr[0] === strMin) {
            this.setState({
              minValue: subArr[1]
            })
          }
          return null
        })
      }
      if (path.includes(strMax)) {
        const historyArr = path.slice(1).split('&')
        historyArr.map((item) => {
          const subArr = item.split('=')
          if (subArr[0] === strMax) {
            this.setState({
              maxValue: subArr[1]
            })
          }
          return null
        })
      }
    }
  }

  onMinValueChange = (e) => {
    this.setState({
      minValue: e.target.value
    })
  }

  onMaxValueChange = (e) => {
    this.setState({
      maxValue: e.target.value
    })
  }

  render () {

    const { minValue, maxValue } = this.state
    const { strMin, strMax } = this.props

    return (
      <div className='input-group'>
        <div className="input-group-prepend">
          <button
            className="btn btn-warning"
            type="button"
            onClick={() => {
              this.props.onNumericDataChange(minValue, maxValue, strMin, strMax)
            }}>
            <i className="fa fa-check" />
          </button>
        </div>
        <input
          type='text'
          className="form-control"
          aria-label=""
          aria-describedby="basic-addon1"
          placeholder='От'
          defaultValue={+minValue === -Infinity ? '' : minValue}
          onChange={this.onMinValueChange} />
        <input
          type='text'
          className="form-control"
          aria-label=""
          aria-describedby="basic-addon1"
          placeholder='До'
          defaultValue={+maxValue === Infinity ? '' : maxValue}
          onChange={this.onMaxValueChange} />
      </div>
    )
  }
}

export default NumericDataFilters
