import React, { useEffect, useState } from "react";
import HumanBody from "../../components/HumanBody";
import { useDispatch, useSelector } from "react-redux";
import { getStory } from "../../requests/getStoryRequest";
import styles from "./index.module.css";
import Img from "./media/BMI.jpg";
import { Link } from "react-router-dom";
import { HeartOutlined } from "@ant-design/icons";
import Button from "../../components/Button";

export default function ResultsPage() {
  const [text, setText] = useState([]);

  const allAnswers = useSelector((state) => state.answers);
  //   console.log('results', allAnswers)

  const submit = (event) => {
    event.preventDefault();
    const { message } = event.target;
    if (message.value != "") {
      setText([...text, message.value]);
    }

    // console.log(text);
    message.value = "";
  };

  const [stories, setStories] = useState([]);
  useEffect(() => {
    const getStory = async () => {
      const response = await fetch("http://localhost:8080/story");
      const storiesResponse = await response.json();
      setStories(storiesResponse);
    };
    getStory();
  }, []);
  //   console.log(stories.slice(0, 2), "stories");

  return (
    <div className={styles.results_page}>
      {allAnswers && (
        <>
          <h4>Your health score: {allAnswers.healthScore}</h4>
          <h4>Your BMI: {allAnswers.bmi}</h4>
        </>
      )}

      <img src={Img} alt="bmi standards" />

      <p>Meet your treatment buddies:</p>

      <div className={styles.treatments}>
        {stories &&
          stories.slice(0, 2).map((e) => (
            <>
              <p>{e.description}</p>
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
                      <p key={index}>
                        {el}&nbsp;&nbsp;
                        <HeartOutlined />{" "}
                      </p>
                    </>
                  ))}
                </div>
                <div className={styles.actions_btns}>
                  <button>Comment</button>
                  <div>I feel sorry for you</div>
                </div>
              </form>
            </>
          ))}
      </div>
      <div className={styles.btn_back}>
        <Link to="/">
          <Button className={styles.back_button}>back to start</Button>
        </Link>
      </div>
    </div>
  );
}