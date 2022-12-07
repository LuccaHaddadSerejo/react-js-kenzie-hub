import React from "react";
import { StyledInput, StyledLabel } from "./style";

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
      <StyledLabel htmlFor={id}>{labelName}</StyledLabel>
      <StyledInput
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
