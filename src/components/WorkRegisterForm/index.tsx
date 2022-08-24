import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { WorkForm } from "./styles";
import { useContext } from "react";
import { WorksContext } from "../../context/WorksContext";

export interface IFormWorkRegister {
  title: string;
  description: string;
  deploy_url: string;
}

function WorkRegisterForm() {
  const { workRegister } = useContext(WorksContext);
  const schema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),
    deploy_url: yup
      .string()
      .url("Insira uma url válida do tipo http:// endereco.com")
      .required("Campo Obrigatório"),
    description: yup
      .string()
      .required("Campo Obrigatório")
      .max(500, "Máximo 300 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormWorkRegister>({
    resolver: yupResolver(schema),
  });

  function formWorkRegister(data: IFormWorkRegister) {
    workRegister(data);
  }

  return (
    <WorkForm onSubmit={handleSubmit(formWorkRegister)}>
      <label>
        Título
        <input
          type="text"
          placeholder="Digite sua Expiência"
          {...register("title")}
        />
        <p>{errors.title?.message}</p>
      </label>
      <label>
        Referência
        <input
          placeholder="Insira o site de referência"
          {...register("deploy_url")}
        />
        <p>{errors.deploy_url?.message}</p>
      </label>
      <label>
        Descrição:
        <textarea {...register("description")}></textarea>
        <p>{errors.description?.message}</p>
      </label>
      <button type="submit">Cadastrar Experiência</button>
    </WorkForm>
  );
}

export default WorkRegisterForm;
