import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/imgs/Logo.svg";
import { StyledHeader, StyledMain, StyledNav } from "./style";
import Button from "../../components/Button";
const Dashboard = ({ user, setUserState }) => {
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.clear();
    setUserState({});
    navigate("/");
  };

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
          <h2>Olá, {user.name}</h2>
          <p>{user.course_module}</p>
        </section>
      </StyledMain>
    </>
  );
};

export default Dashboard;
