import React from "react";
import { StyledForm } from "./style";

const Form = ({ noValidate, onSubmit, children }) => {
  return (
    <StyledForm onSubmit={onSubmit} noValidate={noValidate}>
      {children}
    </StyledForm>
  );
};

export default Form;
