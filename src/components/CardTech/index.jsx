import React from "react";

const TechCard = ({ tech, setShowModal, setTechInfo }) => {
  function openModal() {
    setShowModal(true);
    setTechInfo(tech);
  }

  return (
    <li key={tech.id}>
      <h3>{tech.title}</h3>
      <span>{tech.status}</span>
      <button onClick={() => openModal()}>Editar</button>
    </li>
  );
};

export default TechCard;
