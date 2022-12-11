import React from "react";

const Modal = ({ type, children }) => {
  return (
    <div>
      <div>
        <div>
          {type === "create" ? (
            <h2>Cadastrar tecnologia</h2>
          ) : (
            <h2>Detalhes da tecnologia</h2>
          )}
          <button>X</button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
