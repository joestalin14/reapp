import React, { Component } from 'react'
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps'

import { withRealtyService } from '../hoc'
import Spinner from '../spinner'

import './yamap.sass'

let mapData = {
  center: [51.660781, 39.200269],
  zoom: 9,
  width: '100%',
  height: '300px',
  controls: []
}

class YaMap extends Component {

  state = {
    data: null
  }

  componentDidMount () {
    this.props.realtyService
      .getRealty()
      .then((realty) => {
        this.setState({
          data: realty
        })
      })
  }

  getHeader (realtyItem) {
    const { category,
            area,
            lotArea,
            lotType,
            rooms,
            type,
            formatedPrice } = realtyItem
  
    switch (category) {
      case 'квартира':
        return `${ rooms }-комнатная ${ category }, ${ area } м.кв <br>${ formatedPrice } &#8381;`
      case 'комната':
        return `${ area } м.кв, ${ category } <br>${ formatedPrice } &#8381;`
      case 'дом':
        return `${ area } м.кв, ${ category } на участке ${ lotArea } сот. <br>${ formatedPrice } &#8381;`
      case 'часть дома':
        return `${ area } м.кв, ${ category } на участке ${ lotArea } сот. <br>${ formatedPrice } &#8381;`
      case 'дача':
        return `${ area } м.кв, ${ category } на участке ${ lotArea } сот. <br>${ formatedPrice } &#8381;`
      case 'гараж':
        return `${ category } ${ area } м.кв <br>${ formatedPrice } &#8381;`
      case 'коммерческая':
        return `Помещение ${ area } м.кв, ${ type } <br>${ formatedPrice } &#8381;`
      case 'участок':
        return `${ category } ${ lotType } ${ lotArea } сот. <br>${ formatedPrice } &#8381;`
      default:
        return `Неизвестный объект`
    }
  }

  getColor (item) {
    const { category } = item
    switch (category) {
      case 'квартира':
        return 'islands#nightCircleDotIcon'
      case 'комната':
        return 'islands#darkGreenCircleDotIcon'
      case 'дом':
        return 'islands#redCircleDotIcon'	
      case 'часть дома':
        return 'islands#violetCircleDotIcon'
      case 'дача':
        return 'islands#darkOrangeCircleDotIcon'
      case 'гараж':
        return 'islands#lightBlueCircleDotIcon'
      case 'коммерческая':
        return 'islands#blueCircleDotIcon'
      case 'участок':
        return 'islands#oliveCircleDotIcon'
      default:
        return 'islands#grayCircleDotIcon'
    }
  }
  
  render () {
    const { data } = this.state

    if (!data) {
      return <Spinner />
    }
    
    const placemarks = data.map((item) => {
      const coords = [ item.latitude, item.longitude ]
      const header = this.getHeader(item)
      const link = `<a class='yamap-link' href="./object:${item.id}">${this.getHeader(item)}</a>`
      const placeMark = {
        properties: {
            hintContent: header,
            balloonContent: link
        },
        options: {
          preset: this.getColor(item)
        },
        modules: ['geoObject.addon.balloon', 'geoObject.addon.hint']
      }
      return (
        <Placemark
          key={item.id ? item.id : Math.random()}
          geometry={coords} 
          preset={'islands#greenCircleDotIcon'}
          { ...placeMark }
        />
      )
    })
    
    return (
      <div className='yamap'>
        <YMaps>
          <Map defaultState={mapData} width={'100%'} height={'300px'}>
            { placemarks }
            <ZoomControl options={{ float: 'right' }} />
          </Map>
        </YMaps>
        <div className='yamap-legend'>
          <ul>
            <li><i className="fa fa-dot-circle-o night"/> - Квартиры</li>
            <li><i className="fa fa-dot-circle-o dark-green"/> - Комнаты</li>
            <li><i className="fa fa-dot-circle-o red"/> - Дома</li>
            <li><i className="fa fa-dot-circle-o violet"/> - Часть дома</li>
            <li><i className="fa fa-dot-circle-o dark-orange"/> - Дачи</li>
            <li><i className="fa fa-dot-circle-o light-blue"/> - Гаражи</li>
            <li><i className="fa fa-dot-circle-o blue"/> - Коммерческая</li>
            <li><i className="fa fa-dot-circle-o olive"/> - Участки</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default withRealtyService(YaMap)
