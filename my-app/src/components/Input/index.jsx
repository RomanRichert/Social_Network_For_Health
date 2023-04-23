import React from 'react'

export default function Input({name, placeholder, register}) {
  return (
    <input
      type = "number"
      name = {name}
      placeholder = {placeholder}
      onKeyDown = {(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
      {...register}
    />
  )
}
