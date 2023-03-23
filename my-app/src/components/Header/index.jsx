import React from 'react'
import styles from './index.module.css'
import logo from './media/logo.png'

export default function Header() {

  return (
    <div className={styles.logo}>
      <img src={logo} alt="logo" />
    </div>
  )
}