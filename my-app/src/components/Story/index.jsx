import React, { useState } from "react";
import { HeartOutlined } from "@ant-design/icons";
import styles from "./index.module.css";

export default function Story({ description, message }) {
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
