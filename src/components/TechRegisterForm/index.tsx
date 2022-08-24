import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form } from "./styles";
import { useContext } from "react";
import { TechsContext } from "../../context/TechsContext";

interface ITechDataRegister {
  title: string;
  status: string;
}

export type IInfoDataRegister = Omit<ITechDataRegister, "title">;

function TechRegisterForm() {
  const { techRegister } = useContext(TechsContext);

  const schema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITechDataRegister>({
    resolver: yupResolver(schema),
  });

  function formTechRegister(data: ITechDataRegister) {
    techRegister(data);
  }

  return (
    <Form onSubmit={handleSubmit(formTechRegister)}>
      <label>
        Nome
        <input
          type="text"
          placeholder="Digite sua tecnologia"
          {...register("title")}
        />
        <p>{errors.title?.message}</p>
      </label>
      <label>
        Selecionar status
        <select {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
      </label>
      <button type="submit">Cadastrar Tecnologia</button>
    </Form>
  );
}

export default TechRegisterForm;
