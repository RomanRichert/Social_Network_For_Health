import React, { useState } from "react";
import QuestionItem from "../../components/QuestionItem";
import Button from "../../components/Button";
import style from "./index.module.css";

import { questions } from "../../data";
import { useParams, Link } from "react-router-dom";

export default function QuestionsPage() {
  const { id } = useParams();
  const [selectedValue, setSelectedValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleNextQuestion = () => {
    setIsDisabled(true);
    setSelectedValue("");
  };

  const content = () => {
    if (+id === 1) {
      return (
        <>
          <QuestionItem
            {...questions[+id - 1]}
            isDisabled={isDisabled}
            setIsDisabled={setIsDisabled}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
          <div className={style.arrows}>
            <Link to="/human" className={style.btn_blocks}>
              <Button className={style.btn_block}> go back</Button>
            </Link>
            <p className={style.progress}>{id} from 36</p>
            <Link to={`/${+id + 1}`} className={style.btn_block}>
              <Button
                className={style.btn_block}
                disabled={isDisabled}
                onClick={handleNextQuestion}
              >
                next
              </Button>
            </Link>
          </div>
        </>
      );
    } else if (+id === 36) {
      return (
        <>
          <QuestionItem
            {...questions[+id - 1]}
            isDisabled={isDisabled}
            setIsDisabled={setIsDisabled}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
          <div className={style.arrows}>
            <Link to={`/${+id - 1}`} className={style.btn_blocks}>
              <Button className={style.btn_block}> go back</Button>
            </Link>
            <p className={style.progress}>{id} from 36</p>
            <Link to="/submit" className={style.btn_block}>
              <Button
                className={style.btn_block}
                disabled={isDisabled}
                onClick={handleNextQuestion}
              >
                next
              </Button>
            </Link>
          </div>
        </>
      );
    }
    return (
      <>
        <QuestionItem
          {...questions[+id - 1]}
          isDisabled = {isDisabled}
          setIsDisabled = {setIsDisabled}
          selectedValue = {selectedValue}
          setSelectedValue = {setSelectedValue}
        />
        <div className={style.arrows}>
          <Link to = {`/${+id - 1}`} className = {style.btn_block}>
            <Button>back</Button>
          </Link>
          <p className={style.progress}>{ id } from 36</p>
          <Link to = {`/${+id + 1}`} className = {style.btn_block}>
            <Button
              className = {style.next_btn}
              disabled = {isDisabled}
              onClick = {handleNextQuestion}

            >
              next
            </Button>
          </Link>
        </div>
      </>
    );
  };

  return (
    <div className={style.questions_page}>
      {content()}
    </div>
  );
}
