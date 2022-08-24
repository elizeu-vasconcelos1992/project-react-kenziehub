import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UpdateForm } from "./styles";
import { useContext } from "react";
import { WorksContext } from "../../context/WorksContext";
import { IFormWorkRegister } from "../WorkRegisterForm";

function WorkUpdateForm() {
  const { workUpdateData, workDelete, workId, workUpdate } =
    useContext(WorksContext);

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

  function formWorkUpdate(data: IFormWorkRegister) {
    workUpdate(workId, data);
  }

  return (
    <UpdateForm onSubmit={handleSubmit(formWorkUpdate)}>
      <label>
        Título
        <input
          type="text"
          placeholder="Digite sua Expiência"
          defaultValue={workUpdateData.title}
          {...register("title")}
        />
        <p>{errors.title?.message}</p>
      </label>
      <label>
        Referência
        <input
          placeholder="Insira o site de referência"
          defaultValue={workUpdateData.deploy_url}
          {...register("deploy_url")}
        />
        <p>{errors.deploy_url?.message}</p>
      </label>
      <label>
        Descrição:
        <textarea
          defaultValue={workUpdateData.description}
          {...register("description")}
        ></textarea>
        <p>{errors.description?.message}</p>
      </label>
      <div>
        <button>Atualizar Experiência</button>
        <button
          className="delete"
          onClick={(event) => {
            event.preventDefault();
            workDelete(workId);
          }}
        >
          Excluir
        </button>
      </div>
    </UpdateForm>
  );
}

export default WorkUpdateForm;
