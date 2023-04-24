import React, { useState } from "react";
import QuestionItem from "../../components/QuestionItem";
import Button from "../../components/Button";

import { questions } from "../../data";
import { Link, useNavigate } from "react-router-dom";
import { getAnswerAction } from '../../store/actions/getAnswerAction';
import { useDispatch, useSelector } from "react-redux";

import style from "./index.module.css";

export default function QuestionsPage() {
  const [id, setId] = useState(1)
  const [selectedValue, setSelectedValue] = useState("");

  const stateAnswers = useSelector((state) => state.answers);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleOptionChange = (event) => {
    if (id === 36) {
      setTimeout(() => navigate("/submit"), 100);
    } else {
      setTimeout(() => setId(id+1), 100)
    }
    dispatch(getAnswerAction((stateAnswers[id] = event.currentTarget.value)));
  };

  const content = () => {
    if (id === 1) {
      return (
        <>
          <QuestionItem
            {...questions[id - 1]}
            selectedValue = {selectedValue}
            setSelectedValue = {setSelectedValue}
            handleOptionChange = {handleOptionChange}
          />
          <div className = {style.footer}>
            <Link to = "/human">
              <Button className = {style.btn}> go back</Button>
            </Link>
            <p className = {style.progress}>{id} from 36</p>
          </div>
        </>
      );
    }
    return (
      <>
        <QuestionItem
          {...questions[id - 1]}
          selectedValue = {selectedValue}
          setSelectedValue = {setSelectedValue}
          handleOptionChange = {handleOptionChange}
        />
        <div className={style.footer}>
            <Button 
              className = {style.btn}
              onClick = {() => setId(id-1)}
            >
              go back
            </Button>

          <p className = {style.progress}>{id} from 36</p>
        </div>
      </>
    );
  };

  return <div className = {style.questions_page}>{content()}</div>;
}
