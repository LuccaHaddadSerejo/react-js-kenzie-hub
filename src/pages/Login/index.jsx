import React, { useState } from "react";
import Logo from "../../assets/imgs/Logo.svg";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { registerSchema } from "./formSchema.js";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { api } from "../../services/api.js";
import { toast } from "react-toastify";
const Login = ({ user, setUserState }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const userRegister = async (formData) => {
    try {
      setLoading(true);
      const response = await api.post("/sessions", formData);
      setUserState({ ...response.data.user });
      console.log(user);
      window.localStorage.setItem(
        "@TOKEN",
        JSON.stringify(response.data.token)
      );
      window.localStorage.setItem(
        "@USERID",
        JSON.stringify(response.data.user.id)
      );
      toast.success(response.data.message);
      setTimeout(() => {
        navigate(`/Dashboard/${response.data.user.name}`);
        reset();
      }, 4000);
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
    <main>
      <img src={Logo} alt="Logo KenzieHub" />
      <div>
        <div>
          <h2>Login</h2>
        </div>
        <Form onSubmit={handleSubmit(submit)} noValidate={"noValidate"}>
          <Input
            id={"userEmail"}
            type={"email"}
            placeholder={"Digite seu email"}
            labelName={"Email"}
            register={register("email")}
          />
          {errors.email?.message && <p>{errors.email.message}</p>}

          <Input
            id={"userPassword"}
            type={"password"}
            placeholder={"Digite sua senha"}
            labelName={"Senha"}
            register={register("password")}
          />
          {errors.password?.message && <p>{errors.password.message}</p>}

          <Button type={"submit"} disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </Button>
        </Form>
        <div>
          <p>Ainda não possui uma conta?</p>
          <Link to={"/register"}>
            <Button type={"button"}>Cadastre-se</Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;
