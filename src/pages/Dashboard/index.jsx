import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/imgs/Logo.svg";

const Dashboard = ({ user, setUserState }) => {
  const navigate = useNavigate();
  const logout = () => {
    window.localStorage.clear();
    setUserState({});
    navigate("/");
  };

  return (
    <>
      <header>
        <nav>
          <img src={Logo} alt="Logo KenzieHub" />
          <button type={"button"} onClick={() => logout()}>
            Sair
          </button>
        </nav>
      </header>
      <main>
        <section>
          <h2>Olá, {user.name}</h2>
          <p>{user.course_module}</p>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
