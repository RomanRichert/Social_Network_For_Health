import React, { useState } from "react";
import style from "./index.module.css";
import Button from "../../components/Button";

import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getBodyPartAction } from '../../store/actions/getBodyPartAction';

export default function StartPage() {

  const dispatch = useDispatch()
  const clearState = () => dispatch(getBodyPartAction(''))
  
  return (
    <div className={style.start_page}>
      <div className={style.description}>
        <p>Greetings, dear friend!</p>
        <p>
          We are happy to help you, analyze your health condition and choose the
          best therapy for you!
        </p>
        <p>Are you ready?</p>
      </div>
      <Link to="/human" onClick = {clearState}>
        <Button 
          className={style.start_button}
        >
          start
        </Button>
      </Link>
    </div>
  );
}
