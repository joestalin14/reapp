import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const RealtyObjectGallery = ({ images }) => {
  return (
    <Carousel
      showThumbs={false}
      statusFormatter={(current, total) => `${current} из ${total}`}>
      {
        images.map((image, index) => {
          return (
            <div key={index} >
              <img
                src={image}
                alt='item' />
            </div>
          )
        })
      }
    </Carousel>
  )
}

export default RealtyObjectGallery
