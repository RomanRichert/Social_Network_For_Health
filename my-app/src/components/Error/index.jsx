import React from 'react'
import style from './index.module.css'

export default function Error({error}) {
  return (
    <div className={style.error_message}>
      {error ? <p>{error?.message}</p> : <p></p>}
    </div>
  )
}
