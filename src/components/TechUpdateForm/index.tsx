import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormUpdate } from "./styles";
import { useContext } from "react";
import { TechsContext } from "../../context/TechsContext";

interface ITechDataUpdate {
  title: string;
  status: string;
}

export type IInfoDataUpdate = Omit<ITechDataUpdate, "title">;

function TechUpdateForm() {
  const statusTech = ["Iniciante", "Intermediário", "Avançado"];

  const { techId, techDelete, techTitle, techStatus, techStatusUpdate } =
    useContext(TechsContext);

  const schema = yup.object().shape({
    title: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITechDataUpdate>({
    resolver: yupResolver(schema),
  });

  function formTechUpdate(data: ITechDataUpdate) {
    const { status } = data;
    const info = { status: status };
    techStatusUpdate(techId, info);
  }

  return (
    <FormUpdate onSubmit={handleSubmit(formTechUpdate)}>
      <label>
        Nome da Tecnologia
        <input
          type="text"
          placeholder="Digite sua tecnologia"
          value={techTitle}
          disabled
          {...register("title")}
        />
        <p>{errors.title?.message}</p>
      </label>
      <label>
        Status
        <select {...register("status")} defaultValue={techStatus}>
          {statusTech.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <div>
        <button>Salvar Alterações</button>
        <button
          className="delete"
          onClick={(event) => {
            event.preventDefault();
            techDelete(techId);
          }}
        >
          Excluir
        </button>
      </div>
    </FormUpdate>
  );
}

export default TechUpdateForm;
