import { WorkUpdateContainer } from "./styles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useContext } from "react";
import { WorksContext } from "../../context/WorksContext";
import WorkUpdateForm from "../WorkUpdateForm";

function ModalWorkUpdate() {
  const { setModalWorkUpdate, effectModal, setEffectModal } =
    useContext(WorksContext);

  return (
    <WorkUpdateContainer effectModal={effectModal}>
      <div className="div-container">
        <div className="div-header">
          <span>Atualizar Experiência</span>
          <AiOutlineCloseCircle
            size={22}
            onClick={() => {
              setEffectModal(false);
              setTimeout(() => {
                setModalWorkUpdate(false);
                setEffectModal(true);
              }, 900);
            }}
          />
        </div>
        <WorkUpdateForm />
      </div>
    </WorkUpdateContainer>
  );
}

export default ModalWorkUpdate;
