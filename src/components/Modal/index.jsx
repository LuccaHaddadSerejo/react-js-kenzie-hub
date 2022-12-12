import React from "react";
import Input from "../Input";
import Select from "../Select";
import { useForm } from "react-hook-form";
import Button from "../Button";

const Modal = ({
  setShowModal,
  submitUpdateTech,
  submitTech,
  tech,
  deleteTech,
  techInfo,
  setTechInfo,
}) => {
  const { handleSubmit, register } = useForm({
    mode: "onSubmit",
  });

  function closeModal() {
    setShowModal(false);
    setTechInfo([]);
  }

  return (
    <div>
      <div>
        {techInfo.length === 0 ? (
          <>
            <div>
              <h2>Cadastrar tecnologia</h2>
              <button type="button" onClick={() => setShowModal(false)}>
                X
              </button>
            </div>
            <form
              onSubmit={handleSubmit((data) => {
                submitTech(data);
                setShowModal(false);
              })}
            >
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
              <Button buttonType={"login/register"} type="submit">
                Adicionar
              </Button>
            </form>
          </>
        ) : (
          <>
            <div>
              <h2>Detalhes da tecnologia</h2>
              <button type="button" onClick={() => closeModal()}>
                X
              </button>
            </div>
            <form
              onSubmit={handleSubmit((data) => {
                submitUpdateTech(data, tech.id);
                closeModal();
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
              <Button onClick={() => deleteTech(tech.id)}>Deletar</Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
