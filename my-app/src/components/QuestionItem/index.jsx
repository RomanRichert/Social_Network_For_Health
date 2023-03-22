import React, { useState } from 'react';
import { useEffect } from 'react';
import style from './index.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAnswerAction } from '../../store/actions/getAnswerAction';

export default function QuestionItem({ id, question, answers, isDisabled, setIsDisabled }) {

  const dispatch = useDispatch()
  const answers1 = useSelector(state => state.answers)
  // console.log(id)
  const handleOptionChange = (event) => {
    // console.log(event.currentTarget)
    answers1[id] = event.currentTarget.name
    dispatch(getAnswerAction(answers1));
    
    setIsDisabled(!isDisabled)

    // const { question } = event.target;
    // console.log(question.value);
    // console.log(document.querySelectorAll('.next_btn'))
  };

  return (
    <div className={style.question_item}>
      <p>{question}</p>
      <form>
        {answers.map((answer) => (
          <fieldset  className={style.form}
            key={answer.id}
            name={answer.id}
            onClick={handleOptionChange}
          >
            <input className={style.radio}
              type="radio"
              name="question"
              value={answer.id}
              
              // onClick={handleOptionChange}
            />
            <label>{answer.answer}</label>
          </fieldset>
        ))}
      </form>
    </div>
  );
}
