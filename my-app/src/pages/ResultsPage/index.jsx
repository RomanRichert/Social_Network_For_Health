import React, { useEffect, useState } from "react";
import HumanBody from "../../components/HumanBody";
import { useDispatch, useSelector } from "react-redux";
import { getAllStories } from "../../requests/getAllStoriesRequest";
import styles from "./index.module.css";
import Img from "./media/BMI.jpg";
import { Link } from 'react-router-dom'
import {HeartOutlined} from '@ant-design/icons'

export default function ResultsPage() {
  const [text, setText] = useState([]);

  const dispatch = useDispatch()
//   const stories = useSelector((state) => state.stories);

  const allAnswers = useSelector(state => state.answers)
  console.log('results', allAnswers)

  const submit = (event) => {
    event.preventDefault();
    const { message } = event.target;
	if (message.value != '') {
		setText([...text, message.value]);
	}

    console.log(text);
    message.value = "";
  };

  useEffect(() => {
    const getStory = async () => {
      const response = await fetch("http://localhost:8080/story");
      const stories = await response.json();
    	console.log(stories, "sfsff");
    };
    getStory();
	// dispatch(getAllStories)
  }, []);

  return (
    <div className={styles.results_page}>
		{
			allAnswers &&
			<>
			    <h4>Your health score: {allAnswers.healthScore}</h4>
      			<h4>Your BMI: {allAnswers.bmi}</h4>
			</>
		}

      <img src={Img} alt = "bmi standards" />

      <p>Meet your treatment buddies:</p>

      <div className={styles.treatments}>
		{/* {
			// allAnswers && stories.map(el => <p>{el}</p>)
		} */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          quaerat, magnam quibusdam id molestias quas sint atque illum dolore
          dolor.
        </p>
        <form onSubmit={submit}>
          <textarea
            name="message"
            cols="30"
            rows="10"
            maxLength="250"
            placeholder="*The commentary must contain no more than 250 characters"
          ></textarea>
          <div className={styles.message}>
            {text.map((el, index) => (
				<>
				    <p key={index}>{el}&nbsp;&nbsp;
			  		<HeartOutlined /> </p>
				</>

            ))}
          </div>
          <div className={styles.actions_btns}>
            <button>Comment</button>
            <div>I feel sorry for you</div>
          </div>
        </form>
      </div>
      <Link to='/'>
            <button className={styles.back_button}>back to start</button>
        </Link>
    </div>
  );
}
