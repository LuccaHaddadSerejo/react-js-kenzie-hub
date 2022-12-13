import React, { createContext, useContext } from "react";
import { UserContext } from "./UserContext";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { setTechList, techList, setGlobalLoading } = useContext(UserContext);

  async function addTech(formData) {
    const token = JSON.parse(localStorage.getItem("@TOKEN"));
    try {
      setGlobalLoading(true);
      const response = await api.post("/users/techs", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success("Tecnology created successfully");
      setTechList((oldList) => [...oldList, response.data]);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setGlobalLoading(false);
    }
  }
  function submitTech(data) {
    addTech(data);
  }

  async function deleteTech(id) {
    const token = JSON.parse(localStorage.getItem("@TOKEN"));

    try {
      setGlobalLoading(true);
      // eslint-disable-next-line no-unused-vars
      const response = await api.delete(`/users/techs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success("Tecnology deleted successfully");
      const filterList = techList.filter((elt) => elt.id !== id);
      setTechList(() => [...filterList]);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setGlobalLoading(false);
    }
  }

  async function updateTech(formData, id) {
    const token = JSON.parse(localStorage.getItem("@TOKEN"));
    try {
      setGlobalLoading(true);
      const response = await api.put(`/users/techs/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const updatedList = techList.map((elt) => {
        if (elt.id === id) {
          elt.status = response.data.status;
          return elt;
        } else {
          return elt;
        }
      });

      setTechList(() => [...updatedList]);
      toast.success("Tecnology updated successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setGlobalLoading(false);
    }
  }

  function submitUpdateTech(data, id) {
    updateTech(data, id);
  }

  return (
    <TechContext.Provider value={{ submitTech, deleteTech, submitUpdateTech }}>
      {children}
    </TechContext.Provider>
  );
};
