import React, { Component } from 'react'
import { YMaps, Map, Placemark } from "react-yandex-maps"

import './realty-object-page.sass'

import { withRealtyService } from '../hoc'
import Spinner from '../spinner'
import RealtyItemHeader from '../realty-item-header'
import {
  FlatDescription,
  DormRoomDescription,
  HouseDescription,
  PartOfTheHouseDescription,
  DachaDescription,
  LotDescription,
  GarageDescription,
  CommercialDescription } from './render-methods'
import RealtyObjectGallery from './realty-object-gallery'
import ContactForm from '../contact-form'

let mapData = {
  center: [51.660781, 39.200269],
  zoom: 14,
  width: '100%',
  height: '250px'
}

const objectDescription = (category, object) => {
  switch (category) {
    case 'квартира':
      return <FlatDescription object={object} />
    case 'комната':
      return <DormRoomDescription object={object} />
    case 'дом':
      return <HouseDescription object={object} />
    case 'часть дома':
      return <PartOfTheHouseDescription object={object} />
    case 'дача':
      return <DachaDescription object={object} />
    case 'участок':
      return <LotDescription object={object} />
    case 'гараж':
      return <GarageDescription object={object} />
    case 'коммерческая':
      return <CommercialDescription object={object} />
    default:
      return null
  }
}

class RealtyObjectPage extends Component {

  state = {
    object: null,
    contactFormView: false
  }

  componentDidMount = () => {
    this.props.realtyService
      .getRealty()
      .then((realty) => {
        const object = realty.find(({ id }) => id === this.props.itemId.slice(1) )
        this.setState({ object })
      })
  }

  contactFormToggle () {
    this.setState({
      contactFormView: !this.state.contactFormView
    })
  }

  render () {
    const { object, contactFormView } = this.state

    if (!object) {
      return <Spinner />
    }

    const { region,
            localityName,
            district,
            subLocalityName,
            address,
            description,
            phone,
            formatedPhone,
            agent } = object
    let { images } = object

    if (typeof images === 'string') {
      images = [images]
    } else if (!images) {
      images = ['./noimage.jpg']
    }

    const coords = [ object.latitude, object.longitude ]
    mapData.center = coords

    return (
      <div className='realty-object-page container'>
        <div className='row'>
          <div className='col-sm-12'>
            <RealtyItemHeader realtyItem={object} headerLevel={1} />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <RealtyObjectGallery images={images} />
          </div>
          <div className='col-md-6 description'>
            <p className='address'>{ region }, { localityName }, { district }, { subLocalityName }, { address }</p>
            { objectDescription(object.category, object) }
            <p>Специалист объекта: <b>{ agent }</b></p>
            <div className='btn-group'>
              <a
                className='btn btn-warning'
                href={`tel:${phone}`}>
                { formatedPhone }
              </a>
              <button
                className='btn btn-danger'
                onClick={() => this.contactFormToggle()}>
                Оставить заявку
              </button>
              { contactFormView ? <ContactForm contactFormToggle={() => this.contactFormToggle()} /> : null }
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='text-description'>{ description }</div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='yandex-map'>
              <YMaps>
                <Map width='100%' defaultState={mapData}>
                  <Placemark geometry={coords} />
                </Map>
              </YMaps>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRealtyService(RealtyObjectPage)
