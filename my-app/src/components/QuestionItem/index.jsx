import React, { useState } from 'react';


export default function QuestionItem({ id, question, answers }) {

    const [selectedValue, setSelectedValue] = useState('');
  
    const handleOptionChange = (event) => {
      // setSelectedValue(selectedValue); 
      event.preventDefault()
      const { question } = event.target;
      console.log(question.value);

    }

  return (
	
        <div>
          <legend>{question}</legend>
          <form onSubmit={() => handleOptionChange}>
          {answers.map((answer) => (
            <fieldset key={answer.id}>
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
    
  

