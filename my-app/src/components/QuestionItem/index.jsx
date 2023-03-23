import React, { useEffect } from "react";
import style from "./index.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { getAnswerAction } from '../../store/actions/getAnswerAction';

export default function QuestionItem({
  id,
  question,
  answers,
  isDisabled,
  setIsDisabled,
  selectedValue,
  setSelectedValue
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

    dispatch(getAnswerAction(stateAnswers[id] = event.currentTarget.name));
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
              value = {selectedValue}
            />
            <label>{answer.answer}</label>
          </fieldset>
        ))}
      </form>
    </div>
  );
}
