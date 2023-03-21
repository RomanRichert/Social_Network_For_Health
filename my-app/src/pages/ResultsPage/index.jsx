import React from 'react'
import HumanBody from '../../components/HumanBody'
import styles from './index.module.css'
export default function ResultsPage() {
  return (
	<div className = {styles.results_page}>
		<h4>Your health score: </h4>
		<h4>Your BMI: </h4>

		<p>Meet your treatment buddies:</p>

		<div className = {styles.treatments}>
			<p>Story 1...</p>

			<div className = {styles.actions_btns}>
				<button>Comment</button>
				<button>I feel sorry for you</button>
			</div>
		</div>
	</div>
  )
}
