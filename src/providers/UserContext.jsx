import { createContext, useState } from "react";
import { api } from "../services/api.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const userLogin = async (formData) => {
    try {
      setLoading(true);
      const response = await api.post("/sessions", formData);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));
      localStorage.setItem("@USERID", JSON.stringify(response.data.user.id));
      toast.success(response.data.message);
      navigate(`/Dashboard/${response.data.user.name}`);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const submitLogin = (data) => {
    userLogin(data);
  };

  const userRegister = async (formData) => {
    try {
      setLoading(true);
      const response = await api.post("/users", formData);
      toast.success(response.data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
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
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ user, loading, submitLogin, submitRegister, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
