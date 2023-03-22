import React from "react";
import style from "./index.module.css";
import Icon1 from "./media/anguished_icon.svg";
import Icon2 from "./media/unamused_icon.svg";
import Icon3 from "./media/neutral_icon.svg";
import Icon4 from "./media/smilling_icon.svg";
import Icon5 from "./media/beaming_icon.svg";
import { Link } from 'react-router-dom';
export default function SubmitPage() {
  return (
    <div>
      <div className={style.title_block}>
        <p>Height</p>
        <p>Weight</p>
        <p>Age</p>
      </div>
      <div className={style.submit_block}>
        <input type="text" name="height" />
        <input type="text" name="weight" />
        <input type="number" name="age" />
      </div>
      <p className={style.title}>Therapy</p>
      <div className={style.title2_block}>
        <select>
          <option>Running</option>
          <option>Yoga</option>
          <option>Swim</option>
        </select>
        <div className={style.img_block}>
          <img src={Icon1} alt="" />
          <img src={Icon2} alt="" />
          <img src={Icon3} alt="" />
          <img src={Icon4} alt="" />
          <img src={Icon5} alt="" />
        </div>
      </div>

      <div className={style.story_block}>
        <textarea name="story" cols="30" rows="10" maxLength="250"></textarea>
        <Link to = '/results'>
          <button>Publish my story</button>
        </Link>
       
      </div>
    </div>
  );
}
