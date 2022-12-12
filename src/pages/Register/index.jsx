import React, { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { registerSchema } from "./formSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { StyledError, StyledLink, StyledRegisterMain } from "./style";
import Logo from "../../assets/imgs/Logo.svg";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Select from "../../components/Select";

const Register = () => {
  const { globalLoading, submitRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(registerSchema),
  });

  return (
    <StyledRegisterMain>
      <div>
        <img src={Logo} alt="Logo KenzieHub" />
        <StyledLink to={"/"}>Voltar</StyledLink>
      </div>
      <div>
        <Form
          padding={"login/register"}
          onSubmit={handleSubmit(submitRegister)}
          noValidate={"noValidate"}
        >
          <h2>Crie sua conta</h2>
          <p>Rápido e grátis, vamos nessa!</p>
          <Input
            id={"userName"}
            type={"text"}
            placeholder={"Digite seu nome"}
            labelName={"Nome"}
            register={register("name")}
            disabled={globalLoading}
          />
          {errors.name?.message && (
            <StyledError>
              <p>{errors.name.message}</p>
            </StyledError>
          )}
          <Input
            id={"userEmail"}
            type={"email"}
            placeholder={"Digite seu email"}
            labelName={"Email"}
            register={register("email")}
            disabled={globalLoading}
          />
          {errors.email?.message && (
            <StyledError>
              <p>{errors.email.message}</p>
            </StyledError>
          )}
          <Input
            id={"userPassword"}
            type={"password"}
            placeholder={"Digite sua senha"}
            labelName={"Senha"}
            register={register("password")}
            disabled={globalLoading}
          />
          {errors.password?.message && (
            <StyledError>
              <p>{errors.password.message}</p>
            </StyledError>
          )}
          <Input
            id={"userPassConfirmation"}
            type={"password"}
            placeholder={"Digite novamente usa senha"}
            labelName={"Confirmar senha"}
            register={register("confirm_password")}
            disabled={globalLoading}
          />
          {errors.confirm_password?.message && (
            <StyledError>
              <p>{errors.confirm_password.message}</p>
            </StyledError>
          )}
          <Input
            id={"userBio"}
            type={"text"}
            placeholder={"Fale sobre você"}
            labelName={"Bio"}
            register={register("bio")}
            disabled={globalLoading}
          />
          {errors.bio?.message && (
            <StyledError>
              <p>{errors.bio.message}</p>
            </StyledError>
          )}
          <Input
            id={"userContact"}
            type={"text"}
            placeholder={"Método de contato"}
            labelName={"Contato"}
            register={register("contact")}
            disabled={globalLoading}
          />
          {errors.contact?.message && (
            <StyledError>
              <p>{errors.contact.message}</p>
            </StyledError>
          )}
          <Select
            id={"userModule"}
            labelName={"Selecionar módulo"}
            register={register("course_module")}
          >
            <option value="">Escolha um módulo</option>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro Módulo
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo Módulo
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro Módulo
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto Módulo
            </option>
          </Select>
          {errors.course_module?.message && (
            <StyledError>
              <p>{errors.course_module.message}</p>
            </StyledError>
          )}
          <Button
            buttonType={"login/register"}
            type={"submit"}
            disabled={globalLoading}
          >
            {globalLoading ? "Cadastrando..." : "Cadastrar"}
          </Button>
        </Form>
      </div>
    </StyledRegisterMain>
  );
};

export default Register;
