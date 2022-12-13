import { createContext, useEffect, useState } from "react";
import { api } from "../services/api.js";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [globalLoading, setGlobalLoading] = useState(false);
  const [dashBoardLoading, setDashBoardLoading] = useState(true);
  const [techList, setTechList] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const token = JSON.parse(localStorage.getItem("@TOKEN"));

      if (!token) {
        setDashBoardLoading(false);
        return;
      }

      try {
        setDashBoardLoading(true);
        const response = await api.get(`/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserData(response.data);
        setTechList(response.data.techs);
        navigate(`/Dashboard/${response.data.name}`);
      } catch (error) {
        console.error(error);
      } finally {
        setDashBoardLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userLogin = async (formData) => {
    try {
      setGlobalLoading(true);
      const response = await api.post("/sessions", formData);
      localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));
      localStorage.setItem("@USERID", JSON.stringify(response.data.user.id));
      setUserData(response.data.user);
      setTechList(response.data.user.techs);
      toast.success(response.data.message);
      const toNavigate =
        location.state?.from?.pathname ||
        `/Dashboard/${response.data.user.name}`;

      navigate(toNavigate, { replace: true });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setGlobalLoading(false);
    }
  };

  const submitLogin = (data) => {
    userLogin(data);
  };

  const userRegister = async (formData) => {
    try {
      setGlobalLoading(true);
      const response = await api.post("/users", formData);
      toast.success(response.data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setGlobalLoading(false);
    }
  };

  const submitRegister = (data) => {
    const { name, contact, course_module, email, bio, password } = data;
    const newData = {
      name: name,
      contact: contact,
      course_module: course_module,
      email: email,
      bio: bio,
      password: password,
    };
    userRegister(newData);
  };

  const logout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUserData(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        dashBoardLoading,
        userData,
        techList,
        setTechList,
        globalLoading,
        setGlobalLoading,
        submitLogin,
        submitRegister,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
