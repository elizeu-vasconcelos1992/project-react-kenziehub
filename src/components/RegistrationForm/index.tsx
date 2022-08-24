import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

interface IDataRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
}

export type IInfoRegister = Omit<IDataRegister, "confirmPassword">;

function RegistrationForm() {
  const { kenzieApiRegistration } = useContext(UserContext);
  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório."),
    email: yup.string().required("Email obrigatório.").email("Email inválido."),
    password: yup
      .string()
      .required("Senha Obrigatória")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[#?!@$ %^&*_-])(?=.*\d)[0-9a-zA-Z#?!@$ %^&*_-]{1,}$/,
        "Sua senha precisa pelo menos 1 letra maiuscula, 1 letra minuscula, 1 número e 1 caracter especial."
      )
      .min(6, "A senha deve ter no mínimo 6 caracteres."),
    confirmPassword: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .oneOf([yup.ref("password"), null], "Senha não confirmada."),
    bio: yup
      .string()
      .required("Bio obrigatória.")
      .min(20, "Sua bio deve ter no míno 30 caracteres"),
    contact: yup.string().required("Contato obrigatório."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataRegister>({
    resolver: yupResolver(schema),
  });

  function formRegistration(data: IDataRegister) {
    const { email, password, name, bio, contact, course_module } = data;
    const info = { email, password, name, bio, contact, course_module };

    kenzieApiRegistration(info);
  }

  return (
    <Form onSubmit={handleSubmit(formRegistration)}>
      <label>
        Nome
        <input
          type="text"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        <p>{errors.name?.message}</p>
      </label>
      <label>
        Email
        <input
          type="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>
      </label>
      <label>
        Senha
        <input
          type="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
      </label>
      <label>
        Confirmar Senha
        <input
          type="password"
          placeholder="Digite novamente sua senha"
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword?.message}</p>
      </label>
      <label>
        Bio
        <input type="text" placeholder="Fale sobre você" {...register("bio")} />
        <p>{errors.bio?.message}</p>
      </label>
      <label>
        Contato
        <input
          type="text"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        <p>{errors.contact?.message}</p>
      </label>
      <label>
        Selecionar Módulo
        <select {...register("course_module")}>
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
        </select>
      </label>
      <button type="submit"> Cadastrar</button>
    </Form>
  );
}

export default RegistrationForm;
