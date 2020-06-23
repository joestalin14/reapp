import React from 'react'

const withFilterFunctions = (Wrapped) => {
  return (props) => {
    return (
      <Wrapped
        {...props}
        onFilterChange={(name, value) => {
          props.history.push(`${name}=${value}&`)
        }}
        onSubFilterChange={(name, value) => {
          let newLocation
          if (props.history.location.pathname.indexOf(name) > -1) {
            const locationArr = props.history.location.pathname.split('&')
            newLocation = locationArr.map((item) => {
              if (item.includes(name)) {
                const itemArr = item.split('=')
                itemArr[1] = value
                return itemArr.join('=')
              }
              return item
            })
            newLocation = newLocation.join('&')
            props.history.push(newLocation)
            return
          }
          newLocation = props.history.location.pathname + `${name}=${value}&`
          props.history.push(newLocation)
        }}
        onNumericDataChange={(min, max, minStr, maxStr) => {
          if (!min) {
            min = -Infinity
          }
          if (!max) {
            max = Infinity
          }
          let path = props.history.location.pathname
          if (path.includes(minStr) || path.includes(maxStr)) {
            let historyArr = path.slice(1).split('&')
            let mappedHistoryArr = historyArr.map((item) => {
              const subArr = [item.split('=')[0], item.split('=')[1]]
              if (subArr[0] === minStr) {
                subArr[1] = min
              }
              if (subArr[0] === maxStr) {
                subArr[1] = max
              }
              return subArr.join('=')
            })
            props.history.push(mappedHistoryArr.join('&'))
          } else {
            let newLocation = props.history.location.pathname + `${minStr}=${min}&${maxStr}=${max}&`
            props.history.push(newLocation)
          }
        }}
      />
    )
  }
}

export default withFilterFunctions
