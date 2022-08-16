import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { MainDash } from "./styles";
import ModalTechRegister from "../ModalTechRegister";
import { AiOutlineEdit } from "react-icons/ai";
import { TechsContext } from "../../context/TechsContext";
import ModalTechUpdate from "../ModalTechUpdate";

function Main() {
  const { user } = useContext(UserContext);

  const {
    modalRegister,
    setModalRegister,
    modalUpdate,
    setModalUpdate,
    setTechId,
    setTechTitle,
    setTechStatus,
  } = useContext(TechsContext);

  function listTechs() {
    if (user.techs.length > 0) {
      return user.techs.map((item) => (
        <li key={item.id}>
          <p>{item.title}</p>
          <div>
            <span>{item.status}</span>
            <AiOutlineEdit
              size={20}
              onClick={() => {
                setModalUpdate(true);
                setTechId(item.id);
                setTechTitle(item.title);
                setTechStatus(item.status);
              }}
            />
          </div>
        </li>
      ));
    } else {
      return <p>Você ainda não cadastrou nenhuma Tecnologia</p>;
    }
  }

  if (user) {
    return (
      <MainDash>
        <div className="div-user">
          <h3>{user.name}</h3>
          <p>{user.course_module}</p>
        </div>
        <div className="div-contend">
          <div className="div-techs">
            <h4>Tecnologias</h4>
            <button onClick={() => setModalRegister(true)}>+</button>
          </div>
          <ul>{listTechs()}</ul>
        </div>
        {modalRegister && <ModalTechRegister />}
        {modalUpdate && <ModalTechUpdate />}
      </MainDash>
    );
  }
}

export default Main;
