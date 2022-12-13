import React, { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import { StyledEmptyList, StyledHeader, StyledMain, StyledNav } from "./style";
import { TechContext } from "../../providers/TechContext";
import Modal from "../../components/Modal";
import TechCard from "../../components/CardTech";
import Logo from "../../assets/imgs/Logo.svg";
import Button from "../../components/Button";
import Plus from "../../assets/imgs/+.svg";
import LoadingModal from "../../components/LoadingModal";

const Dashboard = () => {
  const { logout, techList, userData, globalLoading } = useContext(UserContext);
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
          <div>
            <h2>Tecnologias</h2>
            <button onClick={() => setShowModal(true)}>
              <img src={Plus} alt="plus"></img>
            </button>
          </div>
          {techList.length !== 0 ? (
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
          ) : (
            <StyledEmptyList>
              <p>Você ainda não possui nenhuma tecnologia cadastrada</p>
            </StyledEmptyList>
          )}
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
        {globalLoading ? <LoadingModal /> : null}
      </StyledMain>
    </>
  );
};

export default Dashboard;
