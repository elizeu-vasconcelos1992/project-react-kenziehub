import { Container } from "./styles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import TechRegisterForm from "../TechRegisterForm";
import { useContext } from "react";
import { TechsContext } from "../../context/TechsContext";

function ModalTechRegister() {
  const { setModalRegister, effectModal, setEffectModal } =
    useContext(TechsContext);

  return (
    <Container effectModal={effectModal}>
      <div className="div-container">
        <div className="div-header">
          <span>Cadastrar Tecnologia</span>
          <AiOutlineCloseCircle
            size={22}
            onClick={() => {
              setEffectModal(false);
              setTimeout(() => {
                setModalRegister(false);
                setEffectModal(true);
              }, 900);
            }}
          />
        </div>
        <TechRegisterForm />
      </div>
    </Container>
  );
}

export default ModalTechRegister;
