import React from 'react'
import human_body from '../../media/human-body.png'
import styles from './index.module.css'



export default function BodyPartForm({ body_part, isDisabled, setIsDisabled }) {
  const submit = (event) => {
    event.preventDefault();
    const { part } = event.target;
    console.log(part.value);
	setIsDisabled(false)
  };

  return (
    <form onSubmit={submit}>
      <button
        className={[styles[body_part], styles.btn].join(" ")}
        name="part"
        value={body_part}
      ></button>
    </form>
  );
}
