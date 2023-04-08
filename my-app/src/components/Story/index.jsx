import React, { useState } from "react";
import { HeartOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { sendComment } from "../../requests/sendComment";
import { images } from '../../data';
import styles from "./index.module.css";

export default function Story({ id, description, therapies, comments }) {
  const [text, setText] = useState("");
  const [comment, setComment] = useState(comments);
  const dispatch = useDispatch();

  console.log(comments);

  const submit = () => {
    const newComment = text;
    setComment([...comment, newComment]);
    dispatch(sendComment(id, newComment));
    setText("");
  };

  return (
    <div className={styles.story}>
      <p>{description}</p>

      <div className={styles.tagsBlock}>
        {
          therapies.map(el => (
            <div className={styles.tags} key={el.name}>
              <img
                src={images[el.smiley].img}
                alt={`Icon${el.smiley + 1}`}
              />
              <div
                className={[
                  styles.therapy_text,
                  styles[`Icon${images[el.smiley].id + 1}`]
                ].join(" ")}
              >
                <p>{(el.name)[0].toUpperCase() + (el.name).slice(1)}</p>
              </div>
            </div>
        ))
      }
      </div>

      <div>
        <HeartOutlined />
        <textarea
          onChange={(event) => setText(event.target.value)}
          value={text}
          name="comment"
          cols="30"
          rows="10"
          maxLength="250"
          placeholder="*The commentary must contain no more than 250 characters"
        ></textarea>
        <div className={styles.message}>
          <div>
            {comment.map((el) => (
              <p>{el}&nbsp;&nbsp;</p>
            ))}
          </div>
        </div>
        <div className={styles.actions_btns} >
          <button onClick={submit}>Comment</button>
          <div>I feel sorry for you</div>
        </div>
      </div>
    </div>
  );
}
