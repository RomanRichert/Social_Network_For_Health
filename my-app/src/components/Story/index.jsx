import React, { useState } from "react";

import { HeartFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { sendComment } from "../../requests/sendComment";
import { sendVote } from "../../requests/sendVoteRequest";
import { deleteVote } from "../../requests/deleteVoteRequest";
import { images } from '../../data';
import Button from "../Button";
import styles from "./index.module.css";
import cn from 'classnames'

export default function Story({ id, description, therapies, comments, votes }) {
  const [text, setText] = useState("");
  const [comment, setComment] = useState(comments);
  const [vote, setVote] = useState(votes);
  const [color, setColor] = useState("white");

  const dispatch = useDispatch();

  const submit = () => {
    if (text !== '') {
      const newComment = text;
      setComment([...comment, newComment]);
      dispatch(sendComment(id, newComment));
      setText("");
    }
  };

  const likeId = useSelector(state => state.vote)

  const handleClick = () => {
    if (vote === votes + 1) {
      setVote(votes);
      setColor("white");
      dispatch(deleteVote(likeId));
    } else {
      setVote(vote + 1);
      setColor("red");
      dispatch(sendVote(id));
    }

  };

  return (
    <div className={styles.story}>
      <p>{description}</p>
      <div className={styles.tagsBlock}>
        {
          therapies.length > 0
          ?
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
        : ''
      }
      </div>

      <div className={styles.like}>
        <HeartFilled className = {cn(styles.heart, { 
          [styles.white]: color === 'white',
          [styles.red]: color === 'red',
        })}/>
        {vote === 0 ? (
          ""
        ) : (
          <p>
            {vote} 
            {vote === 1 ? <span> person feels</span> : <span> persons feel</span>} sorry for you
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
            {
              comment.map((el, index) => (
                el !== '' 
                ? <li key={index}>{el}</li>
                : ''
              ))
            }
          </ul>
        </div>

        <div className={styles.actions_btns}>
          <Button onClick={submit}>Comment</Button>
          <Button 
            className = {cn({
              [styles.activeLike]: vote === votes + 1,
              [styles.inActiveLike]: vote === votes,
            })}
            onClick={handleClick}
          >
            I feel sorry for you
          </Button>
        </div>
      </div>
    </div>
  );
}
