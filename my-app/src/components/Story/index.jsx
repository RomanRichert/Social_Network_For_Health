import React, { useState } from "react";
import { HeartOutlined } from "@ant-design/icons";
import { images } from '../../data';

import styles from "./index.module.css";

export default function Story({ description, therapies, comments }) {
  const [text, setText] = useState([]);

  const submit = (event) => {
    event.preventDefault();
    const { message } = event.target;
    if (message.value != "") {
      setText([...text, message.value]);
    }
    message.value = "";
  };

  return (
    <div>
      <p>{description}</p>
      {
        therapies.map(el => (
          <div className={styles.tags} key={el}>

            {/* смайлы еще не реализованы */}
            {/* <img
              src={images[el.smiley].img}
              alt={`Icon${el.smiley + 1}`}
            /> */}
            {/* <div
              className={[
                styles.therapy_text,
                styles[`Icon${images[el.smiley].id + 1}`],
              ].join(" ")}
            > */}
              <p>{el[0].toUpperCase() + el.slice(1)}</p>

            
            {/* </div> */}
          </div>
        ))
      }


      <form onSubmit={submit}>
        <textarea
          name="message"
          cols="30"
          rows="10"
          maxLength="250"
          placeholder="*The commentary must contain no more than 250 characters"
        ></textarea>
        <div className={styles.message}>
          {text.map((el, index) => (
            <div key={index}>
              <p key={index}>
                {el}&nbsp;&nbsp;
                <HeartOutlined />{" "}
              </p>
            </div>
          ))}
        </div>
        <div className={styles.actions_btns}>
          <button>Comment</button>
          <div>I feel sorry for you</div>
        </div>
      </form>
    </div>
  );
}
