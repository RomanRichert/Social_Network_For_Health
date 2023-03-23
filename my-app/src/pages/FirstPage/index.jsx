import React, { useState } from "react";
import Button from "../../components/Button";
import HumanBody from "../../components/HumanBody";
import style from "./index.module.css";

import { Link } from "react-router-dom";

export default function FirstPage() {
  const [isDisabled, setIsDisabled] = useState(true);
  
  return (
    <div className={style.first_page}>
      <p>Choose a body part that bothers you.</p>
      <HumanBody isDisabled={isDisabled} setIsDisabled={setIsDisabled} />
      <p className={style.description}>
        Choose one option for each questionnaire item. The answers for the
        following questions are required.
      </p>
      <Link to="/1" className={style.link}>
        <Button disabled={isDisabled}>next</Button>
      </Link>
    </div>
  );
}
