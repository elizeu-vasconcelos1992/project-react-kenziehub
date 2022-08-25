import { WorkContainer } from "./styles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useContext } from "react";
import WorkRegisterForm from "../WorkRegisterForm";
import { WorksContext } from "../../context/WorksContext";

function ModalWorkRegister() {
  const { setModalWorkRegister, effectModal, setEffectModal } =
    useContext(WorksContext);

  return (
    <WorkContainer effectModal={effectModal}>
      <div className="div-container">
        <div className="div-header">
          <span>Cadastrar Experiência</span>
          <AiOutlineCloseCircle
            size={22}
            onClick={() => {
              setEffectModal(false);
              setTimeout(() => {
                setModalWorkRegister(false);
                setEffectModal(true);
              }, 900);
            }}
          />
        </div>
        <WorkRegisterForm />
      </div>
    </WorkContainer>
  );
}

export default ModalWorkRegister;
