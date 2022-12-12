import React from "react";
import { StyledTechCard } from "./style";

const TechCard = ({ tech, setShowModal, setTechInfo }) => {
  function openModal() {
    setShowModal(true);
    setTechInfo(tech);
  }

  return (
    <StyledTechCard onClick={() => openModal()}>
      <li key={tech.id}>
        <h3>{tech.title}</h3>
        <span>{tech.status}</span>
      </li>
    </StyledTechCard>
  );
};

export default TechCard;
