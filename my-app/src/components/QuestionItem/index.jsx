
import React, { useState, useEffect } from "react";
import style from "./index.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { getAnswerAction } from '../../store/actions/getAnswerAction';


export default function QuestionItem({
  id,
  question,
  answers,
  isDisabled,
  setIsDisabled,
}) {

  const [selectedValue, setSelectedValue] = useState("");
  const stateAnswers = useSelector(state => state.answers)
  const dispatch = useDispatch()
  
  const handleOptionChange = (event) => {
    if (isDisabled) {
      setIsDisabled(!isDisabled);
    }
    dispatch(getAnswerAction(event.currentTarget.value));
    setSelectedValue(event.currentTarget.value); 
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
