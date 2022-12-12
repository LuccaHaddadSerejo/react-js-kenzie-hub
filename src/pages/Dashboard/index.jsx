import React, { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import { StyledHeader, StyledMain, StyledNav } from "./style";
import { TechContext } from "../../providers/TechContext";
import Modal from "../../components/Modal";
import TechCard from "../../components/CardTech";
import Logo from "../../assets/imgs/Logo.svg";
import Button from "../../components/Button";

const Dashboard = () => {
  const { logout, techList, userData } = useContext(UserContext);
  const { submitTech, deleteTech, submitUpdateTech } = useContext(TechContext);
  const [showModal, setShowModal] = useState(false);
  const [techInfo, setTechInfo] = useState([]);

  return (
    <>
      <StyledHeader>
        <StyledNav>
          <img src={Logo} alt="Logo KenzieHub" />
          <Button
            buttonType={"logout"}
            type={"button"}
            onClick={() => logout()}
          >
            Sair
          </Button>
        </StyledNav>
      </StyledHeader>
      <StyledMain>
        <section>
          <>
            <h2>Olá, {userData.name}</h2>
            <p>{userData.course_module}</p>
          </>
        </section>
        <section>
          <>
            <h2>Tecnologias</h2>
            <button onClick={() => setShowModal(true)}>
              Adicionar tecnologia
            </button>
          </>
          <>
            <ul>
              {techList.map((tech) => {
                return (
                  <TechCard
                    key={tech.id}
                    tech={tech}
                    setShowModal={setShowModal}
                    setTechInfo={setTechInfo}
                  />
                );
              })}
            </ul>
          </>
        </section>
        {showModal ? (
          <Modal
            techInfo={techInfo}
            type={"create"}
            setShowModal={setShowModal}
            submitTech={submitTech}
            tech={techInfo}
            submitUpdateTech={submitUpdateTech}
            deleteTech={deleteTech}
            setTechInfo={setTechInfo}
          />
        ) : null}
      </StyledMain>
    </>
  );
};

export default Dashboard;
