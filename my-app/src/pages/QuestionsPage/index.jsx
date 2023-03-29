import React, { useState } from "react";
import QuestionItem from "../../components/QuestionItem";
import Button from "../../components/Button";
import style from "./index.module.css";
import { questions } from "../../data";
import { useParams, Link } from "react-router-dom";

export default function QuestionsPage() {
  const { id } = useParams();
  const [selectedValue, setSelectedValue] = useState("");

  const handleNextQuestion = () => {
    setSelectedValue("");
  };

  const content = () => {
    if (+id === 1) {
      return (
        <>
          <QuestionItem
            {...questions[+id - 1]}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
          <div className={style.arrows}>
            <Link to="/human" className={style.btn_block}>
              <Button className={style.btn}> go back</Button>
            </Link>
            <p className={style.progress}>{id} from 36</p>
          </div>
        </>
      );
    }
    return (
      <>
        <QuestionItem
          {...questions[+id - 1]}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
        <div className={style.arrows}>
          <Link to={`/${+id - 1}`} className={style.btn_block}>
            <Button className={style.btn}>go back</Button>
          </Link>
          <p className={style.progress}>{id} from 36</p>
        </div>
      </>
    );
  };

  return <div className={style.questions_page}>{content()}</div>;
}
