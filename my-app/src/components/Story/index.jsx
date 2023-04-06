import React, { useState } from "react";
import { HeartOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { sendComment } from "../../requests/sendComment";
import styles from "./index.module.css";
import { images } from '../../data';

export default function Story({ id, description, therapies, comments }) {
  const [text, setText] = useState("");
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();


  const submit = () => {
    setComment(text);
    dispatch(sendComment(id, comment));
    console.log(comment);
  };

  return (
    <div className = {styles.story}>
      <p>{description}</p>
      <div>
        <textarea
          onChange={(event) => setText(event.target.value)}
          name="comment"
          cols="30"
          rows="10"
          maxLength="250"
          placeholder="*The commentary must contain no more than 250 characters"
        ></textarea>
        <div className={styles.message}>

          {/* {text.map((el, index) => ( */}
          <div>
            <p>
              {comment}&nbsp;&nbsp;
              <HeartOutlined />
            </p>
          </div>
          {/* ))} */}

        </div>
        <div className={styles.actions_btns} >
          <button onClick={submit}>Comment</button>
          <div>I feel sorry for you</div>
        </div>
      </div>
    </div>
  );
}
