import React from 'react'
import { images } from '../../data';
export default function SmileImg({smile}) {
  return (
    <img
      src={images[smile].img}
      alt={`Icon${smile + 1}`}
    />
  )
}
