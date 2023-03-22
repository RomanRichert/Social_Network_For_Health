import React from 'react'
import Button from '../../components/Button'
import HumanBody from '../../components/HumanBody'
import { Link } from 'react-router-dom'
import style from './index.module.css'
export default function FirstPage() {
  return (
	<div className = {style.first_page}>
		<HumanBody />
		<p className = {style.description}>Choose one option for each questionnaire item. The answers for the following questions are required.
		</p>
		<Link to='/1' className = {style.link}>
            <Button>next</Button>
        </Link>
	</div>
  )
}
