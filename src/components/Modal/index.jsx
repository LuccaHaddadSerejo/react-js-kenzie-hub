import React from "react";
import Input from "../Input";
import Select from "../Select";
import { useForm } from "react-hook-form";
import Button from "../Button";
import { StyledModalContent, StyledModalWrapper } from "./style";
import Form from "../Form";

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
    <StyledModalWrapper>
      <div>
        {techInfo.length === 0 ? (
          <StyledModalContent>
            <div>
              <h2>Cadastrar tecnologia</h2>
              <button type="button" onClick={() => setShowModal(false)}>
                X
              </button>
            </div>
            <Form
              padding={"modal"}
              onSubmit={handleSubmit((data) => {
                submitTech(data);
                setShowModal(false);
              })}
            >
              <Input
                name={"techCreate"}
                id={"CreateTech"}
                type="text"
                placeholder={"Tecnologia"}
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
            </Form>
          </StyledModalContent>
        ) : (
          <StyledModalContent>
            <div>
              <h2>Detalhes da tecnologia</h2>
              <button type="button" onClick={() => closeModal()}>
                X
              </button>
            </div>
            <Form
              padding={"modal"}
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
                defaultValue={tech.status}
              >
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </Select>
              <Button buttonType={"login/register"} type="submit">
                Salvar alteração
              </Button>
              <Button
                buttonType={"modalDelete"}
                onClick={() => deleteTech(tech.id)}
              >
                Deletar
              </Button>
            </Form>
          </StyledModalContent>
        )}
      </div>
    </StyledModalWrapper>
  );
};

export default Modal;
