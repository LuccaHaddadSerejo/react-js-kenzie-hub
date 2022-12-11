import React, { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import { StyledHeader, StyledMain, StyledNav } from "./style";
import { TechContext } from "../../providers/TechContext";
import { useForm } from "react-hook-form";
import Modal from "../../components/Modal";
import TechCard from "../../components/CardTech";
import Select from "../../components/Select";
import Input from "../../components/Input";
import Logo from "../../assets/imgs/Logo.svg";
import Button from "../../components/Button";

const Dashboard = () => {
  const { handleSubmit, register } = useForm({
    mode: "onSubmit",
  });
  const { logout, techList, userData } = useContext(UserContext);
  const { submitTech, deleteTech, submitUpdateTech } = useContext(TechContext);
  const [showCreateTechModal, setShowCreateTechModal] = useState(false);
  const [showUpdateTechModal, setShowUpdateTechModal] = useState(false);

  function createModalControl() {
    setShowCreateTechModal(true);
  }

  function updateModalControl() {
    setShowUpdateTechModal(true);
  }

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
            <button onClick={() => createModalControl()}>
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
                    deleteTech={deleteTech}
                    updateModalControl={updateModalControl}
                    submitUpdateTech={submitUpdateTech}
                    showUpdateTechModal={showUpdateTechModal}
                  />
                );
              })}
            </ul>
          </>
        </section>
        {showCreateTechModal && (
          <Modal type={"create"}>
            <form onSubmit={handleSubmit(submitTech)}>
              <Input
                name={"techCreate"}
                id={"CreateTech"}
                type="text"
                placeholder={"Escreva tecnologia que deseja cadastrar"}
                disabled={false}
                labelName={"Nome"}
                register={register("title")}
              />
              <Select
                id={"updateTechStatus"}
                labelName={"Status"}
                register={register("status")}
              >
                <option value="">Escolha sua proficiência</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </Select>
              <button type="submit">Adicionar</button>
            </form>
          </Modal>
        )}
      </StyledMain>
    </>
  );
};

export default Dashboard;
