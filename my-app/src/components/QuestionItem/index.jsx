
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

  const stateAnswers = useSelector(state => state.answers)
  const dispatch = useDispatch()
  
  const handleOptionChange = (event) => {
    if (isDisabled) {
      setIsDisabled(!isDisabled);
    }
    
    console.log('log', event.currentTarget.name)
    dispatch(getAnswerAction(stateAnswers[id] = event.currentTarget.value));

    setSelectedValue(event.currentTarget.value); 
  };

  return (
    <div className={style.question_item}>
      <p>{question}</p>
      <p className={style.required}>*The answer for the question is required.</p>
      <form>
        {answers.map((answer) => (
          <fieldset
            className={style.form}
            key={answer.id}
            name={answer.id}
            
          >
            <input
              className={style.radio}
              type="radio"
              name="question"
              value={answer.id}
              onClick={handleOptionChange}

            />
            <label>{answer.answer}</label>
          </fieldset>
        ))}
      </form>
    </div>
  );
}
