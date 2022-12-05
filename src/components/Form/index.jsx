import React from "react";
const Form = ({ noValidate, onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit} noValidate={noValidate}>
      <fieldset>{children}</fieldset>
    </form>
  );
};

export default Form;
