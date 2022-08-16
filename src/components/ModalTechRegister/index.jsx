import { Container } from "./styles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import TechRegisterForm from "../TechRegisterForm";
import { useContext } from "react";
import { TechsContext } from "../../context/TechsContext";

function ModalTechRegister() {
  const { setModalRegister } = useContext(TechsContext);

  return (
    <Container>
      <div className="div-container">
        <div className="div-header">
          <span>Cadastrar Tecnologia</span>
          <AiOutlineCloseCircle
            size={22}
            onClick={() => setModalRegister(false)}
          />
        </div>
        <TechRegisterForm />
      </div>
    </Container>
  );
}

export default ModalTechRegister;
