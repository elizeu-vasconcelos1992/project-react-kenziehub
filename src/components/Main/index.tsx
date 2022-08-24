import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { MainDash } from "./styles";
import ModalTechRegister from "../ModalTechRegister";
import { AiOutlineEdit } from "react-icons/ai";
import { ImEyePlus } from "react-icons/im";
import { ImEyeMinus } from "react-icons/im";
import { TechsContext } from "../../context/TechsContext";
import ModalTechUpdate from "../ModalTechUpdate";
import { WorksContext } from "../../context/WorksContext";
import ModalWorkRegister from "../ModalWorkRegister";
import ModalWorkUpdate from "../ModalWorkUpdate";

function Main() {
  const [imgId, setImgId] = useState<string>("");

  const { user } = useContext(UserContext);
  const {
    modalWorkRegister,
    setModalWorkRegister,
    modalWorkUpdate,
    setModalWorkUpdate,
    setWorkUpdateData,
    setWorkId,
  } = useContext(WorksContext);

  const {
    modalRegister,
    setModalRegister,
    modalUpdate,
    setModalUpdate,
    setTechId,
    setTechTitle,
    setTechStatus,
  } = useContext(TechsContext);

  return (
    <MainDash>
      <div className="div-user">
        <h3>{user.name}</h3>
        <p>{user.course_module}</p>
      </div>
      <div className="div-contend">
        <div className="div-contend-techs">
          <div className="div-techs">
            <h4>Tecnologias</h4>
            <button onClick={() => setModalRegister(true)}>+</button>
          </div>
          <ul>
            <>
              {user.techs?.length > 0 ? (
                user.techs?.map((item) => (
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
                ))
              ) : (
                <p>Você não tem nenhuma tecnologia cadastrada</p>
              )}
            </>
          </ul>
        </div>
        <div className="div-contend-works">
          <div className="div-techs">
            <h4>Experiências</h4>
            <button onClick={() => setModalWorkRegister(true)}>+</button>
          </div>
          <ul>
            <>
              {user.works?.length > 0 ? (
                user.works?.map((item) => (
                  <li key={item.id} className="works-container">
                    <details>
                      <summary
                        onClick={() =>
                          imgId === item.id ? setImgId("") : setImgId(item.id)
                        }
                      >
                        <p className="work-title">{item.title}</p>
                        {imgId === item.id ? (
                          <ImEyeMinus onClick={() => setImgId("")} size={20} />
                        ) : (
                          <ImEyePlus
                            onClick={() => setImgId(item.id)}
                            size={20}
                          />
                        )}
                      </summary>
                      <p>
                        <span>Descrição:</span> {item.description}
                      </p>
                      <p>
                        <span>URL: </span>
                        <a href={item.deploy_url} target="blank">
                          {item.deploy_url}
                        </a>
                      </p>
                      <div className="div-svg">
                        <AiOutlineEdit
                          size={20}
                          onClick={() => {
                            setModalWorkUpdate(true);
                            setWorkUpdateData({
                              title: item.title,
                              deploy_url: item.deploy_url,
                              description: item.description,
                            });
                            setWorkId(item.id);
                          }}
                        />
                      </div>
                    </details>
                  </li>
                ))
              ) : (
                <p>Você não tem nenhuma experiência cadastrada</p>
              )}
            </>
          </ul>
        </div>
      </div>
      {modalRegister && <ModalTechRegister />}
      {modalUpdate && <ModalTechUpdate />}
      {modalWorkRegister && <ModalWorkRegister />}
      {modalWorkUpdate && <ModalWorkUpdate />}
    </MainDash>
  );
}

export default Main;
