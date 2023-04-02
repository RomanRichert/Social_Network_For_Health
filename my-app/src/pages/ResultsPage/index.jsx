import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Story from "../../components/Story";
import Img from "./media/BMI.jpg";
import styles from "./index.module.css";
import { HeartOutlined } from "@ant-design/icons";

export default function ResultsPage() {
  const [text, setText] = useState([]);
  const [stories, setStories] = useState([]);
  const allAnswers = useSelector((state) => state.allAnswers);

  useEffect(() => {
    const getStory = async () => {
      const response = await fetch("http://localhost:8080/story");
      const storiesResponse = await response.json();
      setStories(storiesResponse);
    };
    getStory();
  }, []);

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
