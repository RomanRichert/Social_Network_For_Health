import React, { useState } from 'react';
import style from './index.module.css'


export default function QuestionItem({ id, question, answers }) {

    const [selectedValue, setSelectedValue] = useState('');
  
    const handleOptionChange = (event) => {
      // setSelectedValue(selectedValue); 
      event.preventDefault()
      const { question } = event.target;
      console.log(question.value);

    }

  return (
	
        <div className={style.question_item}>
          <legend>{question}</legend>
          <form  onSubmit={() => handleOptionChange}>
          {answers.map((answer) => (
            <fieldset className={style.form} key={answer.id}>
            <input type="radio" name='question' value={answer.id} />
              <label onClick={console.log(answer.id, answer.answer)}>
                {answer.answer}
              </label>
            </fieldset>
          ))}
          </form>
        </div>        
      )
    };
    
  

