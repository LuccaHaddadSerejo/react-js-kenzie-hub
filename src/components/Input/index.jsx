import React from "react";

const Input = ({
  name,
  id,
  type,
  placeholder,
  required,
  labelName,
  register,
  disabled,
}) => {
  return (
    <>
      <label htmlFor={id}>{labelName}</label>
      <input
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        {...register}
        disabled={disabled}
      />
    </>
  );
};

export default Input;
