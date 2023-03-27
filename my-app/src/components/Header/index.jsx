import React from 'react'
import styles from './index.module.css'
import logo from './media/logo.svg'

export default function Header() {

  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" />
    </div>
  )
}