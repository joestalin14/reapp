import React, { Component } from 'react'

import './realty-filters.sass'

import { withFilterFunctions, withRealtyService } from '../hoc'
import getCategoryFilters from './get-category-filters'

const categoryData = [
  { dataType: 'category', dataLabel: 'квартира', uiLabel: 'Квартиры' },
  { dataType: 'category', dataLabel: 'комната', uiLabel: 'Комнаты' },
  { dataType: 'category', dataLabel: 'дом', uiLabel: 'Дома' },
  { dataType: 'category', dataLabel: 'часть дома', uiLabel: 'Часть дома' },
  { dataType: 'category', dataLabel: 'дача', uiLabel: 'Дачи' },
  { dataType: 'category', dataLabel: 'участок', uiLabel: 'Участки' },
  { dataType: 'category', dataLabel: 'гараж', uiLabel: 'Гаражи' },
  { dataType: 'category', dataLabel: 'коммерческая', uiLabel: 'Коммерческая' }
]

const typeData = [
  { dataType: 'type', dataLabel: 'аренда', uiLabel: 'Аренда' },
  { dataType: 'type', dataLabel: 'продажа', uiLabel: 'Продажа' },
]

class RealtyFilters extends Component {

  state = {
    selectedCategory: 'Выберите категорию...',
    minPriceValue: null,
    maxPriceValue: null,
    activeBtn: true
  }

  componentDidMount () {
    const path = this.props.history.location.pathname
    if (path.includes('category')) {
      let historyArr = path.slice(1).split('&')
      historyArr.map((item) => {
        const subArr = [item.split('=')[0], item.split('=')[1]]
        if (subArr[0] === 'category') {
          const selectedCategory = categoryData.find((item) => item.dataLabel === subArr[1]).uiLabel
          this.setState({ selectedCategory })
        }
        return null
      })
    } else {
      this.setState({
        selectedCategory: 'Выберите категорию...'
      })
    }
    if (path.includes('min')) {
      const historyArr = path.slice(1).split('&')
      historyArr.map((item) => {
        const subArr = item.split('=')
        if (subArr[0] === 'min') {
          this.setState({
            minPriceValue: subArr[1]
          })
        }
        return null
      })
    }
    if (path.includes('max')) {
      const historyArr = path.slice(1).split('&')
      historyArr.map((item) => {
        const subArr = item.split('=')
        if (subArr[0] === 'max') {
          this.setState({
            maxPriceValue: subArr[1]
          })
        }
        return null
      })
    }
    this.setState({ loading: false })
    typeData.map(({ dataLabel }, index) => {
      if (path.includes(dataLabel)) {
        const activeLabel = `btn${index}`
        this.makeActive(activeLabel)
      }
      return null
    })
  }

  changeSelectedCategory (selectedCategory) {
    this.setState({ selectedCategory })
  }

  makeActive = (str) => {
    this.setState({
      activeBtn: str
    })
  }

  onMinValueChange = (e) => {
    this.setState({
      minPriceValue: e.target.value
    })
  }

  onMaxValueChange = (e) => {
    this.setState({
      maxPriceValue: e.target.value
    })
  }

  render () {

    const { selectedCategory,
            minPriceValue,
            maxPriceValue } = this.state

    return (
      <div className='realty-filters col-md-3'>
        <div className='realty-filters-inner'>
          <div className='dropdown'>
            <button className='btn btn-danger dropdown-toggle'
              type='button'
              id='dropdownMenu1'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'>
              { selectedCategory }
            </button>
            <div
              className='dropdown-menu'
              aria-labelledby='dropdownMenu1'>
              {
                categoryData.map(({ dataType, dataLabel, uiLabel }, index) => {
                  return (
                    <div 
                      key={index}
                      className='dropdown-item'
                      onClick={() => {
                        this.props.onSubFilterChange(dataType, dataLabel)
                        this.changeSelectedCategory(uiLabel)
                      }}>
                      { uiLabel }
                    </div>
                  )
                })
              }
            </div>        
          </div>
          <div
            className='btn-group'
            role='group'
            aria-label='Basic example'>
            {
              typeData.map(({ dataType, dataLabel, uiLabel }, index) => {
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
          {
            getCategoryFilters(selectedCategory, this.props.onSubFilterChange, this.props.onNumericDataChange, this.props.history)
          }
          <h6>Цена:</h6>
          <div className='input-group'>
            <div className="input-group-prepend">
              <button
                className="btn btn-warning"
                type="button"
                onClick={() => {
                  this.props.onNumericDataChange(minPriceValue, maxPriceValue, 'min', 'max')
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
              defaultValue={+this.state.minPriceValue === -Infinity ? '' : this.state.minPriceValue}
              onChange={this.onMinValueChange} />
            <input
              type='text'
              className="form-control"
              aria-label=""
              aria-describedby="basic-addon1"
              placeholder='До'
              defaultValue={+this.state.maxPriceValue === Infinity ? '' : this.state.maxPriceValue}
              onChange={this.onMaxValueChange} />
          </div>
          <button
            className='btn btn-danger default-filters'
            onClick={() => {
              this.props.history.push('')
              this.setState({ 
                minPriceValue: -Infinity,
                maxPriceValue: Infinity,
                activeBtn: null,
                selectedCategory: 'Выберите категорию...'
              })
            }}>
            Сбросить фильтры
          </button>
        </div>
      </div>
    )
  }
}

export default withFilterFunctions(
  withRealtyService(RealtyFilters)
)
