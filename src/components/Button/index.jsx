import React from "react";
import { StyledButton } from "./style";

const Button = ({ type, disabled, children, buttonType, onClick }) => {
  return (
    <StyledButton
      buttonType={buttonType}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
