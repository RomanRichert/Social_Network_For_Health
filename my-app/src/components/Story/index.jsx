import React, { useState } from "react";
import { HeartOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { sendComment } from "../../requests/sendComment";
import { sendVote } from "../../requests/sendVote";
import Button from "../Button";
import styles from "./index.module.css";

export default function Story({ id, description, therapies, comments, votes }) {
  const [text, setText] = useState("");
  const [comment, setComment] = useState(comments);
  const [vote, setVote] = useState(votes);
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  const submit = () => {
    const newComment = text;
    setComment([...comment, newComment]);
    dispatch(sendComment(id, newComment));
    setText("");
  };

  const handleClick = () => {
    setVote(vote + 1);
    setColor("red");
    dispatch(sendVote(id));
  };

  return (
    <div className={styles.story}>
      <p>{description}</p>
      <div className={styles.like}>
        <HeartOutlined style={{ color: color }} />
        {vote === 0 ? (
          ""
        ) : (
          <p>
            {vote} {vote === 1 ? <span>person</span> : <span>persons</span>}{" "}
            feel sorry for you
          </p>
        )}
      </div>
      <div>
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
          <ul>
            {comment.map((el, index) => (
              <li key={index}>{el}&nbsp;&nbsp;</li>
            ))}
          </ul>

        </div>
        <div className={styles.actions_btns}>
          <Button onClick={submit}>Comment</Button>
          <Button onClick={handleClick}>I feel sorry for you</Button>
        </div>
      </div>
    </div>
  );
}
