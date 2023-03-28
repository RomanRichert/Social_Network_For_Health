import React, { useState } from "react";
import HumanBody from "../../components/HumanBody";
import style from "./index.module.css";

export default function FirstPage() {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div className={style.first_page}>
      <p>Choose a body part that bothers you.</p>
      <HumanBody isDisabled={isDisabled} setIsDisabled={setIsDisabled} />
      <p className={style.description}>
        Choose one option for each questionnaire item.
      </p>
      <p className={style.required}>*Required.</p>
    </div>
  );
}
