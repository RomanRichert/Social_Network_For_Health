import React from 'react'
import { images } from '../../data';
import styles from './index.module.css'
import cn from 'classnames'

export default function TherapyTag({smile, children}) {
  return (
    <div
      className = {cn(
      styles.therapy_text,
      styles[`Icon${images[smile].id + 1}`],
      )}
    >
      {children}
    </div>
  )
}
