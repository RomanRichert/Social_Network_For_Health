import React from 'react'
import human_body from '../../media/human-body.png'
import styles from './index.module.css'
import BodyPartForm from '../BodyPartForm'

export default function HumanBody() {
	const btns = [
			"head",
			"left_shoulder",
			"right_shoulder",
			"left_arm",
			"right_arm",
			"left_leg",
			"right_leg",
			"neck",
			"back",
			"lower_back"
	]

  return (
	<div className = {styles.human_body}>
		<img src = {human_body} alt = 'human_body' className = {styles.body_img}/>
		{
			btns.map(el => <BodyPartForm key = {el} body_part = {el} />)
		} 
			
			
			
	</div>
  )
}
