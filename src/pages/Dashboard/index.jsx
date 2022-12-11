import React, { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import Logo from "../../assets/imgs/Logo.svg";
import Button from "../../components/Button";
import { StyledHeader, StyledMain, StyledNav } from "./style";
import { TechContext } from "../../providers/TechContext";
import { useForm } from "react-hook-form";

const Dashboard = () => {
  const { handleSubmit, register } = useForm({ mode: "onSubmit" });
  const { logout, techList, userData } = useContext(UserContext);
  const { submitTech, deleteTech } = useContext(TechContext);
  const [showModal, setShowModal] = useState(false);

  function modalControl() {
    setShowModal(true);
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
            <button onClick={() => modalControl()}>Adicionar tecnologia</button>
          </>
          <>
            <ul>
              {techList.map((tech) => {
                return (
                  <li key={tech.id}>
                    <h3>{tech.title}</h3>
                    <span>{tech.status}</span>
                    <button onClick={() => deleteTech(tech.id)}>Deletar</button>
                  </li>
                );
              })}
            </ul>
          </>
        </section>
        {showModal && (
          <form onSubmit={handleSubmit(submitTech)}>
            <input
              id="testando1111"
              type="text"
              placeholder="tecnologia"
              {...register("title")}
            />
            <select id="testando2222" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <button type="submit">Adicionar</button>
          </form>
        )}
      </StyledMain>
    </>
  );
};

export default Dashboard;
