import React, {useState} from "react";
import style from "./index.module.css";
import Icon1 from "./media/anguished_icon.svg";
import Icon2 from "./media/unamused_icon.svg";
import Icon3 from "./media/neutral_icon.svg";
import Icon4 from "./media/smilling_icon.svg";
import Icon5 from "./media/beaming_icon.svg";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendAnswers } from "../../requests/sendAnswersRequest";
import { getStoryAction } from "../../store/actions/getStoryAction";

export default function SubmitPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      height: "",
      weight: "",
      age: "",
    },
  });

  const images = [
    {id: 0, img: Icon1}, {id: 1, img:Icon2}, 
    {id: 2, img: Icon3}, {id: 3, img: Icon4}, {id: 4, img: Icon5}]
  const body_part = useSelector((state) => state.bodyPart);
  const answers = useSelector((state) => state.answers);

  const submit = (data) => {
    data.height = data.height / 100;
    data.weight = +data.weight;
    data.age = +data.age;
    console.log(data)
    const allAnswers = Object.assign(
      {},
      { age: data.age },
      { description: data.story },
      { bodyPart: body_part.toUpperCase() },
      { bmiAnswers: { weight: data.weight, height: data.height } },
      { sf36Answers: answers }
    );

    dispatch(sendAnswers("http://localhost:8080/story", allAnswers));
    dispatch(getStoryAction);
    navigate("/results");
    reset();
  };

  const heightRegister = register("height", {
    required: "*The field is required",
    pattern: {
      value: /^(1\d{2}|2[0-4]\d|250)$/,
      message: "*Not valid format",
    },
  });

  const weightRegister = register("weight", {
    required: "*The field is required",
    pattern: {
      value: /^\d{2,3}( ?kg)?$/,
      message: "*Not valid format",
    },
  });

  const ageRegister = register("age", {
    required: "*The field is required",
    pattern: {
      value: /^(1[8-9]|[2-9][0-9]|100)'?$/,
      message: "*Not valid format",
    },
  });

  const selectRegister = register("therapy");
  const textareaRegister = register("story");

  const [therapyOptions, setTherapyOptions] = useState([])
  const [selectedImage, setSelectedImage] = useState('Icon5')

  const onSelect = (event) => {
    setTherapyOptions([...therapyOptions, 
      event.target.options[event.target.selectedIndex].value])
  }

  const selectImage = (event) => {
    if (therapyOptions.length > 0) {
       setSelectedImage(event.target.alt)

    } 
  }
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div className={style.submit_block}>
          <label>
            <p>Height</p>
            <p className={style.descr}>From 100cm</p>
            <input
              type="number"
              name="height"
              placeholder="cm"
              {...heightRegister}
            />
            <div className={style.error_message}>
              {
                errors.height
                ? <p>{errors.height?.message}</p>
                : <p></p>
              }
            </div>
          </label>
          <label>
            <p>Weight</p>
            <p className={style.descr}>From 10kg</p>
            <input
              type="number"
              name="weight"
              placeholder="kg"
              {...weightRegister}
            />
            <div className={style.error_message}>
              {
                errors.weight
                ? <p>{errors.weight?.message}</p>
                : <p></p>
              }
            </div>
          </label>
          <label>
            <p>Age</p>
            <p className={style.descr}>From 18+</p>
            <input type="number" name="age" {...ageRegister} />
            <div className={style.error_message}>
              {
                errors.age
                ? <p>{errors.age?.message}</p>
                : <p></p>
              }
            </div>
          </label>
        </div>

        <p className={style.title}>Therapy</p>
        <div className = {style.tagsBlock}>
          {
            therapyOptions.map((el, ind) => <div 
              className = {[style.tags, style[selectedImage]].join(' ')} 
              key = {ind}>
                <p>{el[0].toUpperCase() + el.slice(1)}</p>
                <p 
                  className = {style.close} 
                  onClick = {() => {
                    setTherapyOptions(therapyOptions.filter(o => o != el))
                    }}>x</p>
              </div>)
          }
          
        </div>
        <div className={style.title2_block}>
          <select {...selectRegister} onChange = {onSelect}>
            <option value="">Select therapy</option>
            <option value="running">Running</option>
            <option value="yoga">Yoga</option>
            <option value="swimming">Swimming</option>
          </select>
          <div className={style.img_block}>
            {
              images.map(el => <img 
                key = {el.id} 
                src = {el.img} 
                alt = {`Icon${el.id+1}`}
                onClick = {selectImage}
              />)
            }
          </div>
        </div>
      <div className={style.story_block}>
      
        <textarea name="story" cols="30" rows="10" maxLength="250" placeholder='*The commentary must contain no more than 250 characters'{...textareaRegister}></textarea>


          <button type="submit">Publish my story</button>
        </div>
      </form>
    </div>
  );
}
