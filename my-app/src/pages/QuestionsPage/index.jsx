import React from "react";
import QuestionItem from "../../components/QuestionItem";
import { questions } from '../../data'
import Button from '../../components/Button'
import { useParams } from 'react-router-dom'
import style from './index.module.css'


export default function QuestionsPage() {

  const { id } = useParams();

  return (
  <div className={style.questions_page}>

    {
        <QuestionItem {...questions[+id]} />
      }

      <Button />

  </div>
  )
}
