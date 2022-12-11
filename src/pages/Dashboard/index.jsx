import React, { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import Logo from "../../assets/imgs/Logo.svg";
import Button from "../../components/Button";
import { StyledHeader, StyledMain, StyledNav } from "./style";

const Dashboard = () => {
  const { user, logout } = useContext(UserContext);

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
            <h2>Olá, {user.name}</h2>
            <p>{user.course_module}</p>
          </>
        </section>
      </StyledMain>
    </>
  );
};

export default Dashboard;
