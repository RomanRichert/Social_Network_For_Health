import React, { useState } from "react";
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
import Button from "../../components/Button";

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
    { id: 0, img: Icon1 },
    { id: 1, img: Icon2 },
    { id: 2, img: Icon3 },
    { id: 3, img: Icon4 },
    { id: 4, img: Icon5 },
  ];

  const therapies = ["running", "yoga", "drugs", "swimming"];

  const body_part = useSelector((state) => state.bodyPart);
  const answers = useSelector((state) => state.answers);

  const submit = (data) => {
    data.height = data.height / 100;
    data.weight = +data.weight;
    data.age = +data.age;
    console.log(data);
    const allAnswers = Object.assign(
      {},
      { age: data.age },
      { description: data.story },
      { bodyPart: body_part.toUpperCase() },
      { bmiAnswers: { weight: data.weight, height: data.height } },
      { sf36Answers: answers }
    );

    dispatch(sendAnswers("http://localhost:8080/story", allAnswers));
    // dispatch(getStoryAction);
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

  const [selectedTherapyWithImage, setSelectedTherapyWithImage] = useState([]);
  const [selectedTherapy, setSelectedTherapy] = useState("");

  const onSelect = (event) =>
    setSelectedTherapy(event.target.options[event.target.selectedIndex].value);

  const selectImage = (event) => {
    if (selectedTherapy != "") {
      const newTherapy = {
        name: selectedTherapy,
        smiley: event.target.alt - 1,
      };
      selectedTherapyWithImage.push(newTherapy);
      setSelectedTherapyWithImage([...selectedTherapyWithImage]);
      setSelectedTherapy("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div className={style.submit_block}>
          <label>
            <p>Height</p>
            <p className={style.descr}>60cm-250cm</p>
            <input
              type="number"
              name="height"
              placeholder="cm"
              {...heightRegister}
            />
            <div className={style.error_message}>
              {errors.height ? <p>{errors.height?.message}</p> : <p></p>}
            </div>
          </label>
          <label>
            <p>Weight</p>
            <p className={style.descr}>From 5kg</p>
            <input
              type="number"
              name="weight"
              placeholder="kg"
              {...weightRegister}
            />
            <div className={style.error_message}>
              {errors.weight ? <p>{errors.weight?.message}</p> : <p></p>}
            </div>
          </label>
          <label>
            <p>Age</p>
            <p className={style.descr}>From 16 to 120</p>
            <input type="number" name="age" {...ageRegister} />
            <div className={style.error_message}>
              {errors.age ? <p>{errors.age?.message}</p> : <p></p>}
            </div>
          </label>
        </div>

        <p className={style.title}>Therapy</p>
        <div className={style.tagsBlock}>
          {selectedTherapyWithImage.map((el, ind) => (
            <div className={style.tags} key={ind}>
              <img
                key={ind}
                src={images[el.smiley].img}
                alt={`Icon${el.smiley + 1}`}
                onClick={selectImage}
              />
              <div
                className={[
                  style.therapy_text,
                  style[`Icon${images[el.smiley].id + 1}`],
                ].join(" ")}
              >
                <p>{el.name[0].toUpperCase() + el.name.slice(1)}</p>

                <p
                  className={style.close}
                  onClick={() => {
                    setSelectedTherapyWithImage(
                      selectedTherapyWithImage.filter((o) => o.name != el.name)
                    );
                  }}
                >
                  x
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={style.title2_block}>
          <select {...selectRegister} onChange={onSelect}>
            <option value="">Select therapy</option>
            {therapies.map((el) => (
              <option key={el} value={el}>
                {el[0].toUpperCase() + el.slice(1)}
              </option>
            ))}
          </select>
          <div className={style.img_block}>
            {images.map((el) => (
              <img
                key={el.id}
                src={el.img}
                // alt={`Icon${el.id + 1}`}
                alt={el.id + 1}
                onClick={selectImage}
              />
            ))}
          </div>
        </div>
        <div className={style.story_block}>
          <textarea
            name="story"
            cols="30"
            rows="10"
            maxLength="250"
            placeholder="*The commentary must contain no more than 250 characters"
            {...textareaRegister}
          ></textarea>
          <Button className={style.btn} type="submit">
            Publish my story
          </Button>
        </div>
      </form>
    </div>
  );
}
