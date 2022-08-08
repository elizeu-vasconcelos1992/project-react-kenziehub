import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form } from "./styles";

function LoginForm({ kenzieApi }) {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function formLogin(data) {
    kenzieApi(data);
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
        <input type="password" {...register("password")} />
        <p>{errors.password?.message}</p>
      </label>
      <button type="submit">Entrar</button>
    </Form>
  );
}

export default LoginForm;
