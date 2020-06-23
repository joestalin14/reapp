export default class RealtyService {

  _dataUrl = '/data/yandex.json'

  _hasKey = (obj, key) => {
    if (obj.hasOwnProperty(key)) {
      return obj[key]
    }
    return null
  }

  _hasKeyInKey = (obj, key, subkey) => {
    let result = null
    if (obj.hasOwnProperty(key)) {
      if (obj[key].hasOwnProperty(subkey)) {
        result = obj[key][subkey]
      }
    }
    return result
  }

  _hasKeyInKey = (obj, key, subkey) => {
    let result = null
    if (obj.hasOwnProperty(key)) {
      if (obj[key].hasOwnProperty(subkey)) {
        result = obj[key][subkey]
      }
    }
    return result
  }

  _formatPrice = (num) => {
    if (!num) {
      return num
    }
    switch (num.length) {
      case 1:
      case 2:
      case 3:
        return num
      case 4:
        return num[0] + ' ' + num.slice(1)
      case 5:
        return num.slice(0, 2) + ' ' + num.slice(2)
      case 6:
        return num.slice(0, 3) + ' ' + num.slice(3)
      case 7:
        return num[0] + ' ' + num.slice(1, 4) + ' ' + num.slice(4)
      case 8:
        return num.slice(0, 2) + ' ' + num.slice(2, 5) + ' ' + num.slice(5)
      case 9:
        return num.slice(0, 3) + ' ' + num.slice(3, 6) + ' ' + num.slice(6)
      case 10:
        return num[0] + ' ' + num.slice(1, 4) + ' ' + num.slice(4, 7) + ' ' + num.slice(7)
      default:
        return num
    }
  }

  _formatPhone = (num) => {
    if (!num) {
      return num
    }
    return `${num[0]} (${num.slice(1, 4)}) ${num.slice(4, 7)} ${num.slice(7, 9)} ${num.slice(9)}`
  }

  _transformFlat = (object) => {
    return {
      id: object['@internal-id'],
      category: this._hasKey(object, 'category'),
      type: this._hasKey(object, 'type'),
      region: this._hasKeyInKey(object, 'location', 'region'),
      district: this._hasKeyInKey(object, 'location', 'district'),
      localityName: this._hasKeyInKey(object, 'location', 'locality-name'),
      subLocalityName: this._hasKeyInKey(object, 'location', 'sub-locality-name'),
      address: this._hasKeyInKey(object, 'location', 'address'),
      latitude: this._hasKeyInKey(object, 'location', 'latitude'),
      longitude: this._hasKeyInKey(object, 'location', 'longitude'),
      price: this._hasKeyInKey(object, 'price', 'value'),
      formatedPrice: this._formatPrice(this._hasKeyInKey(object, 'price', 'value')),
      description: this._hasKey(object, 'description'),
      rooms: this._hasKey(object, 'rooms'),
      floor: this._hasKey(object, 'floor'),
      floorsTotal: this._hasKey(object, 'floors-total'),
      area: this._hasKeyInKey(object, 'area', 'value'),
      livingSpace: this._hasKeyInKey(object, 'living-space', 'value'),
      kitchenSpace: this._hasKeyInKey(object, 'kitchen-space', 'value'),
      bathroomUnit: this._hasKey(object, 'bathroom-unit'),
      renovation: this._hasKey(object, 'renovation'),
      lift: this._hasKey(object, 'lift'),
      balcony: this._hasKey(object, 'balcony'),
      images: this._hasKey(object, 'image'),
      agent: this._hasKeyInKey(object, 'sales-agent', 'name'),
      phone: this._hasKeyInKey(object, 'sales-agent', 'phone'),
      formatedPhone: this._formatPhone(this._hasKeyInKey(object, 'sales-agent', 'phone')),
      email: this._hasKeyInKey(object, 'sales-agent', 'email')
    }
  }

  _transformHouse = (object) => {
    return {
      id: object['@internal-id'],
      category: this._hasKey(object, 'category'),
      type: this._hasKey(object, 'type'),
      region: this._hasKeyInKey(object, 'location', 'region'),
      district: this._hasKeyInKey(object, 'location', 'district'),
      localityName: this._hasKeyInKey(object, 'location', 'locality-name'),
      subLocalityName: this._hasKeyInKey(object, 'location', 'sub-locality-name'),
      address: this._hasKeyInKey(object, 'location', 'address'),
      latitude: this._hasKeyInKey(object, 'location', 'latitude'),
      longitude: this._hasKeyInKey(object, 'location', 'longitude'),
      price: this._hasKeyInKey(object, 'price', 'value'),
      formatedPrice: this._formatPrice(this._hasKeyInKey(object, 'price', 'value')),
      description: this._hasKey(object, 'description'),
      rooms: this._hasKey(object, 'rooms'),
      floorsTotal: this._hasKey(object, 'floors-total'),
      bathroomUnit: object['bathroom-unit'],
      area: this._hasKeyInKey(object, 'area', 'value'),
      lotArea: this._hasKeyInKey(object, 'lot-area', 'value'),
      lotType: this._hasKey(object, 'lot-type'),
      images: this._hasKey(object, 'image'),
      agent: this._hasKeyInKey(object, 'sales-agent', 'name'),
      phone: this._hasKeyInKey(object, 'sales-agent', 'phone'),
      formatedPhone: this._formatPhone(this._hasKeyInKey(object, 'sales-agent', 'phone')),
      email: this._hasKeyInKey(object, 'sales-agent', 'email')
    }
  }

  _transformDormRoom = (object) => {
    return {
      id: object['@internal-id'],
      category: this._hasKey(object, 'category'),
      type: this._hasKey(object, 'type'),
      region: this._hasKeyInKey(object, 'location', 'region'),
      district: this._hasKeyInKey(object, 'location', 'district'),
      localityName: this._hasKeyInKey(object, 'location', 'locality-name'),
      subLocalityName: this._hasKeyInKey(object, 'location', 'sub-locality-name'),
      address: this._hasKeyInKey(object, 'location', 'address'),
      latitude: this._hasKeyInKey(object, 'location', 'latitude'),
      longitude: this._hasKeyInKey(object, 'location', 'longitude'),
      price: this._hasKeyInKey(object, 'price', 'value'),
      formatedPrice: this._formatPrice(this._hasKeyInKey(object, 'price', 'value')),
      description: this._hasKey(object, 'description'),
      rooms: this._hasKey(object, 'rooms'),
      roomsOffered: this._hasKey(object, 'rooms-offered'),
      floor: this._hasKey(object, 'floor'),
      floorsTotal: this._hasKey(object, 'floors-total'),
      area: this._hasKeyInKey(object, 'area', 'value'),
      livingSpace: this._hasKeyInKey(object, 'living-space', 'value'),
      bathroomUnit: this._hasKey(object, 'bathroom-unit'),
      lift: this._hasKey(object, 'lift'),
      images: this._hasKey(object, 'image'),
      agent: this._hasKeyInKey(object, 'sales-agent', 'name'),
      phone: this._hasKeyInKey(object, 'sales-agent', 'phone'),
      formatedPhone: this._formatPhone(this._hasKeyInKey(object, 'sales-agent', 'phone')),
      email: this._hasKeyInKey(object, 'sales-agent', 'email')
    }
  }

  _transformDacha = (object) => {
    return {
      id: object['@internal-id'],
      category: this._hasKey(object, 'category'),
      type: this._hasKey(object, 'type'),
      region: this._hasKeyInKey(object, 'location', 'region'),
      district: this._hasKeyInKey(object, 'location', 'district'),
      localityName: this._hasKeyInKey(object, 'location', 'locality-name'),
      subLocalityName: this._hasKeyInKey(object, 'location', 'sub-locality-name'),
      address: this._hasKeyInKey(object, 'location', 'address'),
      latitude: this._hasKeyInKey(object, 'location', 'latitude'),
      longitude: this._hasKeyInKey(object, 'location', 'longitude'),
      price: this._hasKeyInKey(object, 'price', 'value'),
      formatedPrice: this._formatPrice(this._hasKeyInKey(object, 'price', 'value')),
      description: this._hasKey(object, 'description'),
      buildingType: object['building-type'],
      rooms: this._hasKey(object, 'rooms'),
      floorsTotal: this._hasKey(object, 'floors-total'),
      bathroomUnit: this._hasKey(object, 'bathroom-unit'),
      area: this._hasKeyInKey(object, 'area', 'value'),
      lotArea: this._hasKeyInKey(object, 'lot-area', 'value'),
      lotType: this._hasKey(object, 'lot-type'),
      images: this._hasKey(object, 'image'),
      agent: this._hasKeyInKey(object, 'sales-agent', 'name'),
      phone: this._hasKeyInKey(object, 'sales-agent', 'phone'),
      formatedPhone: this._formatPhone(this._hasKeyInKey(object, 'sales-agent', 'phone')),
      email: this._hasKeyInKey(object, 'sales-agent', 'email')
    }
  }

  _transformLot = (object) => {
    return {
      id: object['@internal-id'],
      category: this._hasKey(object, 'category'),
      type: this._hasKey(object, 'type'),
      region: this._hasKeyInKey(object, 'location', 'region'),
      district: this._hasKeyInKey(object, 'location', 'district'),
      localityName: this._hasKeyInKey(object, 'location', 'locality-name'),
      subLocalityName: this._hasKeyInKey(object, 'location', 'sub-locality-name'),
      address: this._hasKeyInKey(object, 'location', 'address'),
      latitude: this._hasKeyInKey(object, 'location', 'latitude'),
      longitude: this._hasKeyInKey(object, 'location', 'longitude'),
      price: this._hasKeyInKey(object, 'price', 'value'),
      formatedPrice: this._formatPrice(this._hasKeyInKey(object, 'price', 'value')),
      description: this._hasKey(object, 'description'),
      lotArea: this._hasKeyInKey(object, 'lot-area', 'value'),
      lotType: this._hasKey(object, 'lot-type'),
      images: this._hasKey(object, 'image'),
      agent: this._hasKeyInKey(object, 'sales-agent', 'name'),
      phone: this._hasKeyInKey(object, 'sales-agent', 'phone'),
      formatedPhone: this._formatPhone(this._hasKeyInKey(object, 'sales-agent', 'phone')),
      email: this._hasKeyInKey(object, 'sales-agent', 'email')
    }
  }

  _transformPartOfTheHouse = (object) => {
    return {
      id: object['@internal-id'],
      category: this._hasKey(object, 'category'),
      type: this._hasKey(object, 'type'),
      region: this._hasKeyInKey(object, 'location', 'region'),
      district: this._hasKeyInKey(object, 'location', 'district'),
      localityName: this._hasKeyInKey(object, 'location', 'locality-name'),
      subLocalityName: this._hasKeyInKey(object, 'location', 'sub-locality-name'),
      address: this._hasKeyInKey(object, 'location', 'address'),
      latitude: this._hasKeyInKey(object, 'location', 'latitude'),
      longitude: this._hasKeyInKey(object, 'location', 'longitude'),
      price: this._hasKeyInKey(object, 'price', 'value'),
      formatedPrice: this._formatPrice(this._hasKeyInKey(object, 'price', 'value')),
      description: this._hasKey(object, 'description'),
      buildingType: this._hasKey(object, 'building-type'),
      rooms: this._hasKey(object, 'rooms'),
      floorsTotal: this._hasKey(object, 'floors-total'),
      bathroomUnit: this._hasKey(object, 'bathroom-unit'),
      area: this._hasKeyInKey(object, 'area', 'value'),
      lotArea: this._hasKeyInKey(object, 'lot-area', 'value'),
      lotType: this._hasKey(object, 'lot-type'),
      images: this._hasKey(object, 'image'),
      agent: this._hasKeyInKey(object, 'sales-agent', 'name'),
      phone: this._hasKeyInKey(object, 'sales-agent', 'phone'),
      formatedPhone: this._formatPhone(this._hasKeyInKey(object, 'sales-agent', 'phone')),
      email: this._hasKeyInKey(object, 'sales-agent', 'email')
    }
  }

  _transformGarage = (object) => {
    return {
      id: object['@internal-id'],
      category: this._hasKey(object, 'category'),
      type: this._hasKey(object, 'type'),
      region: this._hasKeyInKey(object, 'location', 'region'),
      district: this._hasKeyInKey(object, 'location', 'district'),
      localityName: this._hasKeyInKey(object, 'location', 'locality-name'),
      subLocalityName: this._hasKeyInKey(object, 'location', 'sub-locality-name'),
      address: this._hasKeyInKey(object, 'location', 'address'),
      latitude: this._hasKeyInKey(object, 'location', 'latitude'),
      longitude: this._hasKeyInKey(object, 'location', 'longitude'),
      price: this._hasKeyInKey(object, 'price', 'value'),
      formatedPrice: this._formatPrice(this._hasKeyInKey(object, 'price', 'value')),
      description: this._hasKey(object, 'description'),
      area: this._hasKeyInKey(object, 'area', 'value'),
      images: this._hasKey(object, 'image'),
      agent: this._hasKeyInKey(object, 'sales-agent', 'name'),
      phone: this._hasKeyInKey(object, 'sales-agent', 'phone'),
      formatedPhone: this._formatPhone(this._hasKeyInKey(object, 'sales-agent', 'phone')),
      email: this._hasKeyInKey(object, 'sales-agent', 'email')
    }
  }

  _transformCommercial = (object) => {
    return {
      id: object['@internal-id'],
      type: this._hasKey(object, 'type'),
      category: this._hasKey(object, 'category'),
      region: this._hasKeyInKey(object, 'location', 'region'),
      district: this._hasKeyInKey(object, 'location', 'district'),
      localityName: this._hasKeyInKey(object, 'location', 'locality-name'),
      subLocalityName: this._hasKeyInKey(object, 'location', 'sub-locality-name'),
      address: this._hasKeyInKey(object, 'location', 'address'),
      latitude: this._hasKeyInKey(object, 'location', 'latitude'),
      longitude: this._hasKeyInKey(object, 'location', 'longitude'),
      price: this._hasKeyInKey(object, 'price', 'value'),
      formatedPrice: this._formatPrice(this._hasKeyInKey(object, 'price', 'value')),
      floor: this._hasKey(object, 'floor'),
      floorsTotal: this._hasKey(object, 'floors-total'),
      description: this._hasKey(object, 'description'),
      area: this._hasKeyInKey(object, 'area', 'value'),
      images: this._hasKey(object, 'image'),
      agent: this._hasKeyInKey(object, 'sales-agent', 'name'),
      phone: this._hasKeyInKey(object, 'sales-agent', 'phone'),
      formatedPhone: this._formatPhone(this._hasKeyInKey(object, 'sales-agent', 'phone')),
      email: this._hasKeyInKey(object, 'sales-agent', 'email')
    }
  }

  getResource = async () => {
    const res = await fetch(`${this._dataUrl}`)
    if (!res.ok) {
      throw new Error (`Could not fetch, received ${res.status}`)
    }
    const body = await res.json()
    return body['realty-feed'].offer
  }

  data = [
    {
      id: 1,
      category: 'квартира',
      area: 50,
      rooms: 2
    },
    {
      id: 2,
      category: 'квартира',
      area: 32,
      rooms: 1
    },
    {
      id: 3,
      category: 'квартира',
      area: 64,
      rooms: 3
    },
    {
      id: 4,
      category: 'квартира',
      area: 46,
      rooms: 2
    },
    {
      id: 5,
      category: 'участок',
      lotArea: 46
    },
    {
      id: 6,
      category: 'коробка от холодильника',
      lotArea: 46
    }
  ]

  getRealty = async () => {
    const res = await this.getResource()
    return res.map((object) => {
      switch (object.category) {
        case 'квартира':
          return this._transformFlat(object)
        case 'комната':
          return this._transformDormRoom(object)
        case 'дом':
          return this._transformHouse(object)
        case 'дача':
          return this._transformDacha(object)
        case 'участок':
          return this._transformLot(object)
        case 'часть дома':
          return this._transformPartOfTheHouse(object)
        case 'гараж':
          return this._transformGarage(object)
        case 'коммерческая':
          return this._transformCommercial(object)
        default:
          return {}
      }
    })
  }

  getSpecialists = async () => {
    const res = await this.getRealty()
    let result = []
    res.map((item) => {
      let gotIt = 1
      for (let resItem of result) {
        if (resItem.phone === item.phone || resItem.email === item.email) {
          gotIt = 0
        } 
      }
      if (gotIt) {
        result.push({
          agent: item.agent,
          phone: item.phone,
          formatedPhone: item.formatedPhone,
          email: item.email
        })
      }
      return null
    })
    for (let i=0; i<result.length; i++) {
      result[i].id = i + result[i].agent
    }
    return result
  }
}
