import React from "react";
import QuestionItem from "../../components/QuestionItem";
import { questions } from "../../data";
import Button from "../../components/Button";
import { useParams, Navigate, Link } from "react-router-dom";
import style from "./index.module.css";
import ResultsPage from "../ResultsPage";
import FirstPage from "../FirstPage";

export default function QuestionsPage() {
  const { id } = useParams();

  //   if (+id === 1) {
  //     <Navigate to={<FirstPage />} />;
  //   }
  //   if (+id === 35) {
  //     <Navigate to={<ResultsPage />} />;
  //   }

  return (
    <div className={style.questions_page}>
      {<QuestionItem {...questions[+id - 1]} />}
      {+id === 1 ? (
        <>
          <Link to={"/"} className={style.btn_block}>
            <Button>back</Button>
          </Link>
          <Link to={`/${+id + 1}`} className={style.btn_block}>
            <Button>next</Button>
          </Link>
        </>
      ) : (
        <>
          <Link to={`/${+id - 1}`} className={style.btn_block}>
            <Button>back</Button>
          </Link>

          <Link to={`/${+id + 1}`} className={style.btn_block}>
            <Button>next</Button>
          </Link>
        </>
      )}
      {/* if ( +id === 36 ) */}
      {
        <Link to={"results"} className={style.btn_block}>
          <Button>next</Button>
        </Link>
      }
      {+id === 36 ? (
        <>
          <Link to={"results"} className={style.btn_block}>
            <Button>next</Button>
          </Link>
          <Link to={`/${+id - 1}`} className={style.btn_block}>
            <Button>back</Button>
          </Link>
        </>
      ) : (
        <>
          <Link to={`/${+id - 1}`} className={style.btn_block}>
            <Button>back</Button>
          </Link>

          <Link to={`/${+id + 1}`} className={style.btn_block}>
            <Button>next</Button>
          </Link>
        </>
      )}
    </div>
  );
}
