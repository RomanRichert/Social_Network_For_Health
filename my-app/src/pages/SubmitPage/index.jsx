import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendAnswers } from "../../requests/sendAnswersRequest";
import { images } from "../../data";
import { therapies } from '../../data';

import Button from "../../components/Button";
import SmileImg from '../../components/SmileImg';
import TherapyTag from '../../components/TherapyTag';
import BMIBlock from '../../components/BMIBlock';
import style from "./index.module.css";

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

  const [selectedTherapyWithImage, setSelectedTherapyWithImage] = useState([]);
  const [selectedTherapy, setSelectedTherapy] = useState("");

  const body_part = useSelector((state) => state.bodyPart);
  const answers = useSelector((state) => state.answers);

  const submit = (data) => {

    let therapies = {}
    selectedTherapyWithImage.map(el => therapies[el.name] = el.smiley)

    const allAnswers = Object.assign(
      {},
      {
        age: +data.age,
        description: data.story,
        bodyPart: body_part.toUpperCase(),
        bmiAnswers: { weight: +data.weight, height: +data.height / 100 },
        sf36Answers: answers,
        therapies: therapies 
      }
    );

    dispatch(sendAnswers("http://localhost:8080/story", allAnswers));

    navigate("/results");
    reset();
  };

  const heightRegister = register("height", {
    required: "*The field is required",
    pattern: {
      value: /^([6-9][0-9]|1\d{2}|2[0-4]\d|250)$/,
      message: "*Not valid format",
    },
  });

  const weightRegister = register("weight", {
    required: "*The field is required",
    pattern: {
      value: /^([5-9]|\d{2}|[1-4]\d{2})( ?kg)?$/,
      message: "*Not valid format",
    },
  });

  const ageRegister = register("age", {
    required: "*The field is required",
    pattern: {
      value: /^(1[6-9]|[2-9][0-9]|1[0-1]\d{1}|120)'?$/,
      message: "*Not valid format",
    },
  });

  const selectRegister = register("therapy");
  const textareaRegister = register("story");
  
  const onSelect = (event) => {
    setSelectedTherapy(event.target.options[event.target.selectedIndex].value);
  }

  const selectImage = (event) => {
    if (selectedTherapy !== "") {
      const newTherapy = {
        name: selectedTherapy,
        smiley: +event.target.alt - 1,
      };

      if (!selectedTherapyWithImage.some((el) => el.name === selectedTherapy)) {
         selectedTherapyWithImage.push(newTherapy);
         setSelectedTherapyWithImage([...selectedTherapyWithImage]);
      }
     }
  };

  const checkKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
    }
  }

  return (
      <form onSubmit = {handleSubmit(submit)} onKeyDown = {event => checkKeyDown(event)}>
        <BMIBlock 
          weightRegister = {weightRegister}
          heightRegister = {heightRegister}
          ageRegister = {ageRegister}
          errors = {errors}
        />
       
        <p className = {style.title}>Therapy</p>
        <div className = {style.tagsBlock}>
        {
          selectedTherapyWithImage.map((el, ind) => (
            <div className = {style.tags} key={ind}>
              <SmileImg smile = {el.smiley} />

              <TherapyTag smile = {el.smiley} >
                <p>{el.name[0].toUpperCase() + el.name.slice(1)}</p>

                <p
                  className = {style.close}
                  onClick = {() => {
                    setSelectedTherapyWithImage(
                      selectedTherapyWithImage.filter((o) => o.name !== el.name)
                    );
                  }}
                >
                  x
                </p>
              </TherapyTag>
            </div>
          ))
        }
        </div>

        <div className = {style.therapy_block}>
          <select {...selectRegister} onChange = {onSelect}>
            <option value = "">Select therapy</option>
            {therapies.map((el) => (
              <option key = {el} value = {el}>
                {el[0].toUpperCase() + el.slice(1)}
              </option>
            ))}
          </select>
          <div className = {style.img_block}>
            {images.map((el) => (
              <img
                key = {el.id}
                src = {el.img}
                alt = {el.id + 1}
                onClick = {selectImage}
              />
            ))}
          </div>
        </div>
        <div className = {style.story_block}>
          <textarea
            name = "story"
            cols = "30"
            rows = "10"
            maxLength = "250"
            placeholder = "*The commentary must contain no more than 250 characters"
            {...textareaRegister}
          ></textarea>
          <Button className = {style.btn} type = "submit">
            Publish my story
          </Button>
        </div>
      </form>
  );
}
