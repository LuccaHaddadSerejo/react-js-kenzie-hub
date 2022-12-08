import React, { useState } from "react";
import Logo from "../../assets/imgs/Logo.svg";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { registerSchema } from "./formSchema.js";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { api } from "../../services/api.js";
import { toast } from "react-toastify";
import { StyledLoginMain } from "./style";
import { StyledLink } from "../../components/Form/style";
import { StyledError } from "../Register/style";

const Login = ({ setUserState }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const userRegister = async (formData) => {
    try {
      setLoading(true);
      const response = await api.post("/sessions", formData);
      setUserState({ ...response.data.user });
      window.localStorage.setItem(
        "@TOKEN",
        JSON.stringify(response.data.token)
      );
      window.localStorage.setItem(
        "@USERID",
        JSON.stringify(response.data.user.id)
      );
      toast.success(response.data.message);
      navigate(`/Dashboard/${response.data.user.name}`);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const submit = (data) => {
    userRegister(data);
  };

  return (
    <StyledLoginMain>
      <img src={Logo} alt="Logo KenzieHub" />
      <div>
        <Form onSubmit={handleSubmit(submit)} noValidate={"noValidate"}>
          <h2>Login</h2>
          <Input
            id={"userEmail"}
            type={"email"}
            placeholder={"Digite seu email"}
            labelName={"Email"}
            register={register("email")}
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
          />
          {errors.password?.message && (
            <StyledError>
              <p>{errors.password.message}</p>
            </StyledError>
          )}

          <Button
            buttonType={"login/register"}
            type={"submit"}
            disabled={loading}
          >
            {loading ? "Entrando..." : "Entrar"}
          </Button>
          <div>
            <p>Ainda não possui uma conta?</p>
            <StyledLink to={"/register"}>Cadastre-se</StyledLink>
          </div>
        </Form>
      </div>
    </StyledLoginMain>
  );
};

export default Login;
