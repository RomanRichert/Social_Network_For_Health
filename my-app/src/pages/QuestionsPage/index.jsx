import React from "react";
import QuestionItem from "../../components/QuestionItem";
import { questions } from "../../data";
import Button from "../../components/Button";
import { useParams } from "react-router-dom";
import style from "./index.module.css";
import { Link } from "react-router-dom";

export default function QuestionsPage() {
  const { id } = useParams();

  return (
    <div className={style.questions_page}>
      {<QuestionItem {...questions[+id]} />}
      {+id === 1 ? (
        <Link to={"/"} className={style.btn_block}>
          <Button>back</Button>
        </Link>
      ) : (
        <Link to={`/${+id - 1}`} className={style.btn_block}>
          <Button>next</Button>
        </Link>
      )}
      {/* {+id === 36 ? (
        <Link to={"/"} className={style.btn_block}>
          <Button>next</Button>
        </Link>
      ) : (
        <Link to={`/${+id + 1}`} className={style.btn_block}>
          <Button>back</Button>
        </Link>
      )} */}
    </div>
  );
}
