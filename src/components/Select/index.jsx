import React from "react";
import { StyledLabel } from "../Input/style";
import { StyledSelect } from "./style";

const Select = ({ id, labelName, register, defaultValue, children }) => {
  return (
    <>
      <StyledLabel htmlFor={id}>{labelName}</StyledLabel>
      <StyledSelect defaultValue={defaultValue} id={id} {...register}>
        {children}
      </StyledSelect>
    </>
  );
};

export default Select;
