import React from "react";
import style from "./index.module.css";
import Icon1 from "./media/anguished_icon.svg";
import Icon2 from "./media/unamused_icon.svg";
import Icon3 from "./media/neutral_icon.svg";
import Icon4 from "./media/smilling_icon.svg";
import Icon5 from "./media/beaming_icon.svg";
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sendAnswers } from '../../requests/sendAnswersRequest';
import { getAllStoriesAction } from '../../store/actions/getAllStoriesAction';
export default function SubmitPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {register, handleSubmit, formState: {errors}, reset } = useForm({
    mode: 'onBlur',
        defaultValues: {
        height: '',
        weight: '',
        age: ''
        }
  });

  const body_part = useSelector(state => state.bodyPart)
  const answers = useSelector(state => state.answers)
  // const bmi = useSelector(state => state.bmi)

const submit = (data) => {
    data.height = data.height / 100
    data.weight = +data.weight
    data.age = +data.age

    const allAnswers = Object.assign(
      {}, 
      {bodyPart: body_part.toUpperCase()},
      {age: data.age},
      {description: data.story},
      {bmiAnswers: {weight: data.weight, height: data.height}}, 
      {sf36Answers: answers})

      const allAnswers1 = {
        "age": "27",
        "description": "something",
        "bodyPart": "NECK",
        "bmiAnswers": {
               "weight": "77",
               "height": "1.81"
               },
        "sf36Answers":{
           "1": "1",
           "2": "1",
           "3": "1",
           "4": "1",
           "5": "1",
           "6": "1",
           "7": "1",
           "8": "1",
           "9": "1",
           "10": "1",
           "11": "1",
           "12": "1",
           "13": "1",
           "14": "1",
           "15": "1",
           "16": "1",
           "17": "1",
           "18": "1",
           "19": "1",
           "20": "1",
           "21": "1",
           "22": "1",
           "23": "1",
           "24": "1",
           "25": "1",
           "26": "1",
           "27": "1",
           "28": "1",
           "29": "1",
           "30": "1",
           "31": "1",
           "32": "1",
           "33": "1",
           "34": "1",
           "35": "1",
           "36": "1"
       }}
    dispatch(sendAnswers(allAnswers1));
    dispatch(getAllStoriesAction)
    navigate('/results')
    reset();            
}

const heightRegister = register('height', {
  required: '*The field is required',
  pattern: {
    value: /^(1\d{2}|2[0-4]\d|250)$/,
    message: '*Not valid format'
  }
});

const weightRegister = register('weight', {
  required: '*The field is required',
  pattern: {
    value: /^\d{2,3}( ?kg)?$/,
    message: '*Not valid format'
  }
});

const ageRegister = register('age', {
  required: '*The field is required',
  pattern: {
    value: /^(1[8-9]|[2-9][0-9]|100)'?$/,
    message: '*Not valid format'
    }
});

const selectRegister = register('therapy');
const textareaRegister = register ('story');

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div className={style.submit_block}>
          <label>
          <p>Height</p>
          <input type="number" name="height" placeholder='cm'  {...heightRegister}/>
            <div className={style.error_message_height}>
                      {errors.height && <p>{errors.height?.message}</p>}
                  </div>
          </label>
          <label>
        <p>Weight</p>
        <input type="number" name="weight" placeholder='kg'  {...weightRegister}/>
                <div className={style.error_message_weight}>
                    {errors.weight && <p>{errors.weight?.message}</p>}
                </div>
        </label>
        <label>
        <p>Age</p>
        <input type="number" name="age"  {...ageRegister}/>
        <div className={style.error_message_age}>
                    {errors.age && <p>{errors.age?.message}</p>}
                </div>
        </label>
      </div>
      
      
      <p className={style.title}>Therapy</p>
      <div className={style.title2_block}>
        <select {...selectRegister}>
          <option value = ''>Select therapy</option>
          <option value = 'running'>Running</option>
          <option value = 'yoga'>Yoga</option>
          <option value = 'swimming'>Swimming</option>
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
      
        <textarea name="story" cols="30" rows="10" maxLength="250" {...textareaRegister}></textarea>

        <button type = 'submit' >
          Publish my story
        </button>
        
      </div>
      </form>
    </div>
  );
}
