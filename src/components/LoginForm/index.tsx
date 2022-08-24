import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form } from "./styles";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { ImEyePlus } from "react-icons/im";
import { ImEyeMinus } from "react-icons/im";

export interface IDataLogin {
  email: string;
  password: string;
}

function LoginForm() {
  const { kenzieApiLogin } = useContext(UserContext);
  const [inputType, setInputType] = useState<string>("password");

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataLogin>({
    resolver: yupResolver(schema),
  });

  function formLogin(data: IDataLogin) {
    kenzieApiLogin(data);
  }

  return (
    <Form onSubmit={handleSubmit(formLogin)}>
      <label>
        Email
        <input type="email" {...register("email")} />
        <p>{errors.email?.message}</p>
      </label>

      <label>
        Senha
        <div className="div-password">
          <input
            type={inputType}
            className="input-password"
            {...register("password")}
          />
          {inputType === "password" ? (
            <ImEyePlus size={20} onClick={() => setInputType("text")} />
          ) : (
            <ImEyeMinus size={20} onClick={() => setInputType("password")} />
          )}
        </div>
        <p>{errors.password?.message}</p>
      </label>
      <button type="submit">Entrar</button>
    </Form>
  );
}

export default LoginForm;
