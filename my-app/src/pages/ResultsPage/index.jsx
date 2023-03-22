import React, { useEffect, useState } from "react";
import HumanBody from "../../components/HumanBody";
import styles from "./index.module.css";
export default function ResultsPage() {
  const [text, setText] = useState([]);

  const submit = (event) => {
    event.preventDefault();
    const { message } = event.target;
    setText([...text, message.value]);
    console.log(text);
    message.value = "";
  };

  //   useEffect(() => {
  // 	setText()
  //   }, [text]);

  return (
    <div className={styles.results_page}>
      <h4>Your health score: 53</h4>
      <h4>Your BMI: 25.0</h4>

      <p>Meet your treatment buddies:</p>

      <div className={styles.treatments}>
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
            maxLength="50"
          ></textarea>
          <div className={styles.message}>
            {text.map((el, index) => (
              <p key={index}>{el}</p>
            ))}
          </div>
          <div className={styles.actions_btns}>
            <button>Comment</button>
            <div>I feel sorry for you</div>
          </div>
        </form>
      </div>
    </div>
  );
}
