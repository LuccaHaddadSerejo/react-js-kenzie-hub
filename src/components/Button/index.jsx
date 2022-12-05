import React from "react";

const Button = ({ type, disabled, onclick, children }) => {
  return (
    <button disabled={disabled} type={type}>
      {children}
    </button>
  );
};

export default Button;
