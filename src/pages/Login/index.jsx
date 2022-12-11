import React, { useContext } from "react";
import { UserContext } from "../../providers/UserContext.jsx";
import { registerSchema } from "./formSchema.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { StyledLoginMain } from "./style";
import { StyledLink } from "../../components/Form/style";
import { StyledError } from "../Register/style";
import Logo from "../../assets/imgs/Logo.svg";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";

const Login = () => {
  const { loading, submitLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  return (
    <StyledLoginMain>
      <img src={Logo} alt="Logo KenzieHub" />
      <div>
        <Form onSubmit={handleSubmit(submitLogin)} noValidate={"noValidate"}>
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
