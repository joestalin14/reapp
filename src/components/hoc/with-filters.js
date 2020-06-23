import React from 'react'

const withFilters = (Wrapped) => {
  return (props) => {
    return (
      <Wrapped
        {...props}
        updateFilters={(filters, state) => {
          let mappedFiltersData
          if (!filters) {
            mappedFiltersData = [ null ]
          } else {
            const filtersData = filters.split('&')
            mappedFiltersData = filtersData.map((item) => {
              const arr = [item.split('=')[0], item.split('=')[1]]
              return arr
            })
          }

          let newData = [ ...state.realty ]

          if (mappedFiltersData.length === 1 && mappedFiltersData[0] === null) {
            return newData
          }

          for (const filt of mappedFiltersData) {
            if (filt[0] !== '' && filt[0] !== 'min' && filt[0] !== 'max' && filt[0] !== 'areaMin' && filt[0] !== 'areaMax' && filt[0] !== 'lotMin' && filt[0] !== 'lotMax' && filt[1] !== '5+') {
              newData = newData.filter((item) => item[`${filt[0]}`] === filt[1])
            } else if (filt[1] === '5+') {
              newData = newData.filter((item) => +item.rooms >= 5)
            } else if (filt[0] === 'areaMin') {
              newData = newData.filter((item) => +item.area >= +filt[1])
            } else if (filt[0] === 'areaMax') {
              newData = newData.filter((item) => +item.area <= +filt[1])
            } else if (filt[0] === 'min') {
              newData = newData.filter((item) => +item.price >= +filt[1])
            } else if (filt[0] === 'max') {
              newData = newData.filter((item) => +item.price <= +filt[1])
            } else if (filt[0] === 'lotMin') {
              newData = newData.filter((item) => +item.lotArea >= +filt[1])
            } else if (filt[0] === 'lotMax') {
              newData = newData.filter((item) => +item.lotArea <= +filt[1])
            }
          }
          return newData
        }}
      />
    )
  }
}

export default withFilters
