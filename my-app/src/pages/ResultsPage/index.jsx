import React from "react";
import HumanBody from "../../components/HumanBody";
import styles from "./index.module.css";
export default function ResultsPage() {
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
        <textarea name="sms" cols="30" rows="10" maxLength="50"></textarea>
        <div className={styles.actions_btns}>
          <button>Comment</button>
          <button>I feel sorry for you</button>
        </div>
      </div>
    </div>
  );
}
