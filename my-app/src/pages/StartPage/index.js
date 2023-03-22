import React, {useState} from 'react'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import style from './index.module.css'

export default function StartPage() {
  return (
	<div>
        <div className = {style.description}>
            <p>Greetings, dear friend!</p>
            <br></br>
            <p>We are happy to help you, analyze your health condition and choose the best therapy for you!</p>
            <br></br>
            <p>Are you ready?</p>
        </div>
		<Link to='/human'>
            <button className={style.start_button}>start</button>
        </Link>
	</div>
  )
}
