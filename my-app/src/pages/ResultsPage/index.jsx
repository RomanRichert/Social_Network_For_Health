import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStory } from "../../requests/getStoryRequest";
import styles from "./index.module.css";
import Img from "./media/BMI.jpg";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Story from "../../components/Story";

export default function ResultsPage() {
  const allAnswers = useSelector((state) => state.allAnswers);

  const [stories, setStories] = useState([]);
  useEffect(() => {
    const getStory = async () => {
      const response = await fetch("http://localhost:8080/story");
      const storiesResponse = await response.json();
      setStories(storiesResponse);
    };
    getStory();
  }, []);

  console.log(allAnswers.healthScore, allAnswers);

  return (
    <div className={styles.results_page}>
      {allAnswers && allAnswers.healthScore && allAnswers.bmi ? (
        <>
          <h4>
            Your health score:{" "}
            {allAnswers.healthScore !== "undefined"
              ? allAnswers.healthScore.toFixed(2)
              : ""}
          </h4>
          <h4>
            Your BMI:{" "}
            {allAnswers.bmi !== "undefined" ? allAnswers.bmi.toFixed(2) : ""}
          </h4>
        </>
      ) : (
        "Error, You have not responded at all questions"
      )}

      <img src={Img} alt="bmi standards" />

      <p>Meet your treatment buddies:</p>

      <div className={styles.treatments}>
        {stories &&
          stories.slice(0, 2).map((el) => <Story key={el.id} {...el} />)}
      </div>

      <div className={styles.btn_back}>
        <Link to="/">
          <Button className={styles.back_button}>back to start</Button>
        </Link>
      </div>
    </div>
  );
}
