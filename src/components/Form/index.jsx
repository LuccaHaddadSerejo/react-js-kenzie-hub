import React from "react";
import { StyledForm } from "./style";

const Form = ({ noValidate, onSubmit, padding, children }) => {
  return (
    <StyledForm onSubmit={onSubmit} noValidate={noValidate} padding={padding}>
      {children}
    </StyledForm>
  );
};

export default Form;
