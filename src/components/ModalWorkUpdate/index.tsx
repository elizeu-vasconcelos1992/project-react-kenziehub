import { WorkUpdateContainer } from "./styles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useContext } from "react";
import { WorksContext } from "../../context/WorksContext";
import WorkUpdateForm from "../WorkUpdateForm";

function ModalWorkUpdate() {
  const { setModalWorkUpdate } = useContext(WorksContext);

  return (
    <WorkUpdateContainer>
      <div className="div-container">
        <div className="div-header">
          <span>Atualizar Experiência</span>
          <AiOutlineCloseCircle
            size={22}
            onClick={() => setModalWorkUpdate(false)}
          />
        </div>
        <WorkUpdateForm />
      </div>
    </WorkUpdateContainer>
  );
}

export default ModalWorkUpdate;
