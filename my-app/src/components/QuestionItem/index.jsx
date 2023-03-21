import React from "react";

export default function QuestionItem({ id, question, answers }) {
  return (
    <div>
      <legend>{question}</legend>
      {answers.map((answer) => (
        <form>
          <fieldset key={answer.id}>
            <input type="radio" name="question" value={answer.answer} />
            <label>{answer.answer}</label>
          </fieldset>
        </form>
      ))}
    </div>
  );
}
