import { WorkContainer } from "./styles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useContext } from "react";
import WorkRegisterForm from "../WorkRegisterForm";
import { WorksContext } from "../../context/WorksContext";

function ModalWorkRegister() {
  const { setModalWorkRegister } = useContext(WorksContext);

  return (
    <WorkContainer>
      <div className="div-container">
        <div className="div-header">
          <span>Cadastrar Experiência</span>
          <AiOutlineCloseCircle
            size={22}
            onClick={() => setModalWorkRegister(false)}
          />
        </div>
        <WorkRegisterForm />
      </div>
    </WorkContainer>
  );
}

export default ModalWorkRegister;
