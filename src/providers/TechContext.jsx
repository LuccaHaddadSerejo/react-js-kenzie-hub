import React, { createContext, useContext } from "react";
import { UserContext } from "./UserContext";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { setTechList, techList } = useContext(UserContext);

  async function addTech(formData) {
    const token = JSON.parse(localStorage.getItem("@TOKEN"));
    try {
      const response = await api.post("/users/techs", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success("Tecnology created successfully");
      setTechList((oldList) => [...oldList, response.data]);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  function submitTech(data) {
    addTech(data);
  }

  async function deleteTech(id) {
    const token = JSON.parse(localStorage.getItem("@TOKEN"));

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await api.delete(`/users/techs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success("Tecnologia deleted successfully");
      const filterList = techList.filter((elt) => elt.id !== id);
      setTechList(() => [...filterList]);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <TechContext.Provider value={{ submitTech, deleteTech }}>
      {children}
    </TechContext.Provider>
  );
};
