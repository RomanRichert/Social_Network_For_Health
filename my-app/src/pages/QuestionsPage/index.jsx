import React, { useState } from "react";
import QuestionItem from "../../components/QuestionItem";
import { questions } from "../../data";
import Button from "../../components/Button";
import { useParams, Navigate, Link } from "react-router-dom";
import style from "./index.module.css";
import ResultsPage from "../ResultsPage";
import FirstPage from "../FirstPage";

export default function QuestionsPage() {
  const { id } = useParams();

  const [isDisabled, setIsDisabled] = useState(true);

  const handleNextQuestion = () => {
    setIsDisabled(true);
  };

  const content = () => {
    if (+id === 1) {
      return (
        <>
          <QuestionItem
            {...questions[+id - 1]}
            isDisabled={isDisabled}
            setIsDisabled={setIsDisabled}
          />
          <div className={style.arrows}>
            <Link to="/human" className={style.btn_block}>
              <Button>back</Button>
            </Link>
            <Link to={`/${+id + 1}`} className={style.btn_block}>
              <Button
                className={style.next_btn}
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
          />
          <div className={style.arrows}>
            <Link to={`/${+id - 1}`} className={style.btn_block}>
              <Button>back</Button>
            </Link>
            <Link to="/submit" className={style.btn_block}>
              <Button
                className={style.next_btn}
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
          isDisabled={isDisabled}
          setIsDisabled={setIsDisabled}
        />
        <div className={style.arrows}>
          <Link to={`/${+id - 1}`} className={style.btn_block}>
            <Button>back</Button>
          </Link>

          <Link to={`/${+id + 1}`} className={style.btn_block}>
            <Button
              className={style.next_btn}
              disabled={isDisabled}
              onClick={handleNextQuestion}
            >
              next
            </Button>
          </Link>
        </div>
      </>
    );
  };

  const text_description = () => {
    switch (+id) {
      case 3:
        return (
          <p className={style.description}>
            The following items are about activities you might do during a
            typical day. Does your health now limit you in these activities? If
            so, how much?
          </p>
        );
      case 13:
        return (
          <p className={style.description}>
            During the past 4 weeks, have you had any of the following problems
            with your work or other regular daily activities as a result of your
            physical health?
          </p>
        );
      case 17:
        return (
          <p className={style.description}>
            During the past 4 weeks, have you had any of the following problems
            with your work or other regular daily activities as a result of any
            emotional problems (such as feeling depressed or anxious)?
          </p>
        );
      case 23:
        return (
          <>
            <p className={style.description}>
              These questions are about how you feel and how things have been
              with you during the past 4 weeks. For each question, please give
              the one answer that comes closest to the way you have been
              feeling.
            </p>

            <p className={style.description}>
              How much of the time during the past 4 weeks...
            </p>
          </>
        );
      case 33:
        return (
          <p className={style.description}>
            How TRUE or FALSE is each of the following statements for you.
          </p>
        );

      default:
        return "";
    }
  };

  return (
    <div className={style.questions_page}>
      {text_description()}
      {content()}
    </div>
  );
}

