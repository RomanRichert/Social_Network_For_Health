
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

  useEffect(() => {
    const inputs = document.querySelectorAll('input')
    inputs.forEach(el => el.checked = false)
    if (stateAnswers[id] != '') {
      inputs[stateAnswers[id] - 1].checked = true
    }
  }, [id])

  const handleOptionChange = (event) => {
    if (isDisabled) {
      setIsDisabled(!isDisabled);
    }
    
    // console.log('log', event.currentTarget.value)
    dispatch(getAnswerAction(stateAnswers[id] = event.currentTarget.value));

  };

  const text_description = () => {
    switch (+id) {
      case 3:
        return (
          <p className={style.description}>
            The following items are about activities you might do during a
            typical day. Does your health now limit you in these activities? If
            so, how much?
          </p>
        );
      case 13:
        return (
          <p className={style.description}>
            During the past 4 weeks, have you had any of the following problems
            with your work or other regular daily activities as a result of your
            physical health?
          </p>
        );
      case 17:
        return (
          <p className={style.description}>
            During the past 4 weeks, have you had any of the following problems
            with your work or other regular daily activities as a result of any
            emotional problems (such as feeling depressed or anxious)?
          </p>
        );
      case 23:
        return (
          <>
            <p className={style.description}>
              These questions are about how you feel and how things have been
              with you during the past 4 weeks. For each question, please give
              the one answer that comes closest to the way you have been
              feeling.
            </p>

            <p className={style.description}>
              How much of the time during the past 4 weeks...
            </p>
          </>
        );
      case 33:
        return (
          <p className={style.description}>
            How TRUE or FALSE is each of the following statements for you.
          </p>
        );

      default:
        return "";
    }
  };

  return (
    <div className={style.question_item}>
      <p>{question}</p>
      {text_description()}
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
