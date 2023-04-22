import React from "react";
import Input from '../../components/Input';
import Error from '../../components/Error';
import style from "./index.module.css";

export default function BMIBlock({
  weightRegister, heightRegister, ageRegister, errors 
}) 
{
  return (
    <div className = {style.bmi_block}>
      <label>Height
        <p className = {style.description}>60cm-250cm</p>
        <Input 
          name = 'height' 
          placeholder = 'cm' 
          register = {heightRegister} 
        />
        <Error error = {errors.height} />
      </label>

      <label>Weight
        <p className = {style.description}>From 5kg</p>
        <Input 
          name = 'weight' 
          placeholder = 'kg' 
          register = {weightRegister} 
        />
        <Error error = {errors.weight} /> 
      </label>

      <label>Age
        <p className = {style.description}>From 16 to 120</p>
        <Input 
          name = 'age' 
          register = {ageRegister} 
        />
        <Error error = {errors.age} />
      </label>
          
    </div>
  );
}
