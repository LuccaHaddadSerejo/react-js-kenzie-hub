import React, { useState } from "react";
import Logo from "../../assets/imgs/Logo.svg";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { registerSchema } from "./formSchema";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { api } from "../../services/api.js";
import { toast } from "react-toastify";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const userRegister = async (formData) => {
    try {
      setLoading(true);
      const response = await api.post("/users", formData);
      toast.success(response.data.message);
      reset();
      setTimeout(() => {
        navigate("/");
      }, 4000);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const submit = (data) => {
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

  return (
    <main>
      <div>
        <img src={Logo} alt="Logo KenzieHub" />
        <Link to={"/"}>
          <Button type={"button"}>Voltar</Button>
        </Link>
      </div>

      <div>
        <div>
          <h2>Crie sua conta</h2>
          <p>Rápido e grátis, vamos nessa!</p>
        </div>

        <Form onSubmit={handleSubmit(submit)}>
          <Input
            id={"userName"}
            type={"text"}
            placeholder={"Digite seu nome"}
            labelName={"Nome"}
            register={register("name")}
            disabled={loading}
          />
          {errors.name?.message && <p>{errors.name.message}</p>}

          <Input
            id={"userEmail"}
            type={"email"}
            placeholder={"Digite seu email"}
            labelName={"Email"}
            register={register("email")}
            disabled={loading}
          />
          {errors.email?.message && <p>{errors.email.message}</p>}

          <Input
            id={"userPassword"}
            type={"password"}
            placeholder={"Digite sua senha"}
            labelName={"Senha"}
            register={register("password")}
            disabled={loading}
          />
          {errors.password?.message && <p>{errors.password.message}</p>}

          <Input
            id={"userPassConfirmation"}
            type={"password"}
            placeholder={"Digite novamente usa senha"}
            labelName={"Confirmar senha"}
            register={register("confirm_password")}
            disabled={loading}
          />
          {errors.confirm_password?.message && (
            <p>{errors.confirm_password.message}</p>
          )}

          <Input
            id={"userBio"}
            type={"text"}
            placeholder={"Fale sobre você"}
            labelName={"Bio"}
            register={register("bio")}
            disabled={loading}
          />
          {errors.bio?.message && <p>{errors.bio.message}</p>}

          <Input
            id={"userContact"}
            type={"text"}
            placeholder={"Método de contato"}
            labelName={"Contato"}
            register={register("contact")}
            disabled={loading}
          />
          {errors.contact?.message && <p>{errors.contact.message}</p>}

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
            <p>{errors.course_module.message}</p>
          )}

          <Button type={"submit"} disabled={loading}>
            {loading ? "Cadastrando..." : "Cadastrar"}
          </Button>
        </Form>
      </div>
    </main>
  );
};

export default Register;
