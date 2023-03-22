import React, { useState } from 'react';
import style from './index.module.css'


export default function QuestionItem({ id, question, answers }) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleOptionChange = (event) => {
    console.log(event.currentTarget.name);
    //setSelectedValue(selectedValue);

    setSelectedValue(event.target.value);
    // const { question } = event.target;
    // console.log(question.value);
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
