import React, { useState } from "react";

export default function QuestionItem({ id, question, answers }) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleOptionChange = (event) => {
    console.log(event.target.value);
    //setSelectedValue(selectedValue);
    setSelectedValue(event.target.value);
    // const { question } = event.target;
    // console.log(question.value);
  };

  return (
    <div>
      <legend>{question}</legend>
      <form>
        {answers.map((answer) => (
          <fieldset key={answer.id}>
            <input
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
