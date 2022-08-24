import { ContainerUpdate } from "./styles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useContext } from "react";
import { TechsContext } from "../../context/TechsContext";
import TechUpdateForm from "../TechUpdateForm";

function ModalTechUpdate() {
  const { setModalUpdate } = useContext(TechsContext);

  return (
    <ContainerUpdate>
      <div className="div-container">
        <div className="div-header">
          <span>Detalhes da Tecnologia</span>
          <AiOutlineCloseCircle
            size={22}
            onClick={() => setModalUpdate(false)}
          />
        </div>
        <TechUpdateForm />
      </div>
    </ContainerUpdate>
  );
}

export default ModalTechUpdate;
