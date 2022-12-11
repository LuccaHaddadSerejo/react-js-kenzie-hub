import React from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
import Input from "../Input";
import Modal from "../Modal";
import Select from "../Select";

const TechCard = ({
  tech,
  deleteTech,
  updateModalControl,
  submitUpdateTech,
  showUpdateTechModal,
}) => {
  const { handleSubmit, register } = useForm({
    mode: "onSubmit",
  });

  return (
    <li key={tech.id}>
      <h3>{tech.title}</h3>
      <span>{tech.status}</span>
      <button onClick={() => deleteTech(tech.id)}>Deletar</button>
      <button onClick={() => updateModalControl()}>Editar</button>
      {showUpdateTechModal && (
        <Modal type={"updateTech"}>
          <form
            onSubmit={handleSubmit((data) => {
              submitUpdateTech(data, tech.id);
            })}
          >
            <Input
              name={tech.title}
              id={"updateTechTitle"}
              type="text"
              defaultValue={tech.title}
              disabled={true}
              labelName={"Nome da Tecnologia"}
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
            <Button type="submit">Atualizar</Button>
          </form>
        </Modal>
      )}
    </li>
  );
};

export default TechCard;
