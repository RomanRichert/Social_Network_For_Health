import React, { useEffect } from "react";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getBodyPartAction } from "../../store/actions/getBodyPartAction";

import cn from 'classnames'

export default function BodyPartForm({ body_part }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const stored_body_part = useSelector((store) => store.bodyPart);

  useEffect(() => {
    if (stored_body_part !== "") {
      const btns = document.getElementsByClassName(styles.btn);

      Array.from(btns).forEach((el) => {
        if (el.value === stored_body_part) {
          el.classList.add(styles.active);
        }
      });
    }
  }, []);

  const submit = (event) => {
    event.preventDefault();
    const { part } = event.target;
    dispatch(getBodyPartAction(part.value));
    const btns = document.getElementsByClassName(styles.btn);
    Array.from(btns).forEach((el) => el.classList.remove(styles.active));
    part.classList.add(styles.active);
    setTimeout(() => navigate("/questions"), 100);
  };

  return (
    <form onSubmit = {submit}>
      <button
        className = {cn(styles[body_part], styles.btn)}
        name = "part"
        value = {body_part}
      ></button>
    </form>
  );
}
