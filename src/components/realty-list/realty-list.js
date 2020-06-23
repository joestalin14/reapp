import React, { Component } from 'react'

import './realty-list.sass'

import RealtyListItem from '../realty-list-item'
import Spinner from '../spinner'
import { withRealtyService, withFilters } from '../hoc'
import PaginationControls from '../pagination-controls'

const RealtyList = ({ realty }) => {
  return (
    <ul className='realty-list'>
      {
        realty.map((realtyItem) => {
          const { id } = realtyItem

          return (
            <li
              key={id}
              className='realty-list-li'>
              <RealtyListItem realtyItem={realtyItem}/>
            </li>
          )
        })
      }
    </ul>
  )
}

const Counter = ({ num }) => {
  return (
    <p className='counter badge badge-danger'>
      Найдено: { num }
    </p>
  )
}

class RealtyListContainer extends Component {

  state = {
    realty: null,
    filteredData: null,
    currentPage: null,
    pageCount: null,
    loading: true
  }

  componentDidMount () {
    this.props.realtyService
      .getRealty()
      .then((realty) => {
        this.setState({
          realty: realty
        })
      })
      .then(() => {
        this.setState({
          filteredData: this.props.updateFilters(this.props.filters, this.state),
          loading: false
        })
      })
      .then(() => {
        const startingPage = 1
        const data = this.state.filteredData
        const pageSize = 15
        let pageCount = parseInt(data.length / pageSize)
        if (data.length % pageSize > 0) {
          pageCount++
        }
        this.setState({
          currentPage: startingPage,
          pageCount: pageCount
        })
      })
  }

  componentDidUpdate (prevProps) {
    if (prevProps.filters !== this.props.filters) {
      this.setState({
        filteredData: this.props.updateFilters(this.props.filters, this.state)
      }, () => {
        const startingPage = 1
        const data = this.state.filteredData
        const pageSize = 15
        let pageCount = parseInt(data.length / pageSize)
        if (data.length % pageSize > 0) {
          pageCount++
        }
        this.setState({
          currentPage: startingPage,
          pageCount: pageCount
        })
      })

    }
  }

  setCurrentPage (num) {
    this.setState({currentPage: num})
  }

  createPaginatedData () {
    const data = this.state.filteredData
    const pageSize = 15
    const currentPage = this.state.currentPage
    const upperLimit = currentPage * pageSize
    const dataSlice = data.slice((upperLimit - pageSize), upperLimit)
    return dataSlice
  }

  changeSortType (type) {
    this.setState({
      sortType: type
    })
  }

  render () {
    const { loading, filteredData, pageCount } = this.state

    const { filters, counterEnable } = this.props

    if (loading) {
      return <Spinner />
    }

    if (!filters) {
      return (
        <div className='col-md-9 realty-items'>
          { counterEnable ? <Counter num={filteredData.length} /> : null }
          <RealtyList realty={this.createPaginatedData()} />
          { pageCount > 1 ? <PaginationControls pageCount={this.state.pageCount} currentPage={this.state.currentPage} setCurrentPage={(num) => this.setCurrentPage(num)} /> : null }
        </div>
      )
    }

    if (filters && this.props.updateFilters(filters, this.state).length > 0) {
      return (
        <div className='col-md-9 realty-items'>
          { counterEnable ? <Counter num={filteredData.length} /> : null }
          <RealtyList realty={this.createPaginatedData()} />
          { pageCount > 1 ? <PaginationControls pageCount={this.state.pageCount} currentPage={this.state.currentPage} setCurrentPage={(num) => this.setCurrentPage(num)} /> : null }
        </div>
      )
    }

    if (this.props.updateFilters(filters, this.state).length === 0) {
      return (
        <div className='col-md-9 realty-items'>
          К сожалению у нас нет объектов, соответствующих критериям поиска.
        </div>
      )
    }
  }

}

export default withRealtyService(
  withFilters(RealtyListContainer)
)
