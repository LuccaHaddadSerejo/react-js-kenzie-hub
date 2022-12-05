import React from "react";

const Select = ({ id, labelName, register, children }) => {
  return (
    <>
      <label htmlFor={id}>{labelName}</label>
      <select id={id} {...register}>
        {children}
      </select>
    </>
  );
};

export default Select;
