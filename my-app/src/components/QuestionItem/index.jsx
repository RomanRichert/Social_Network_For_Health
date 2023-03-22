import React, { useState, useEffect } from "react";

import style from "./index.module.css";
import { useSelector } from 'react-redux';
export default function QuestionItem({
  id,
  question,
  answers,
  isDisabled,
  setIsDisabled,
}) {
  const [selectedValue, setSelectedValue] = useState("");

const stateAnswers = useSelector(state => state.answers)
console.log(stateAnswers)
// useEffect(() => setSelectedValue(stateAnswers))
  const handleOptionChange = (event) => {
    console.log(event.currentTarget.name, isDisabled);
    if (isDisabled) {
      setIsDisabled(!isDisabled);
    }

    setSelectedValue(event.currentTarget.value);
    event.currentTarget.value = null
  };

  return (
    <div className={style.question_item}>
      <p>{question}</p>
      <form>
        {answers.map((answer) => (
          <fieldset
            className={style.form}
            key={answer.id}
            name={answer.id}
            onClick={handleOptionChange}
          >
            <input
              className={style.radio}
              type="radio"
              name="question"
              value={answer.id}
            />
            <label>{answer.answer}</label>
          </fieldset>
        ))}
      </form>
    </div>
  );
}
