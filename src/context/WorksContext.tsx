/* eslint-disable react-hooks/exhaustive-deps */
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { IFormWorkRegister } from "../components/WorkRegisterForm";
import { toast, ToastContainer } from "react-toastify";
import api from "../services";
import { UserContext } from "./UserContext";

interface IWorksProvider {
  children: ReactNode;
}

interface IWorkContext {
  modalWorkRegister: boolean;
  modalWorkUpdate: boolean;
  workUpdateData: IFormWorkRegister;
  workId: string;
  setModalWorkRegister: Dispatch<SetStateAction<boolean>>;
  setModalWorkUpdate: Dispatch<SetStateAction<boolean>>;
  setWorkUpdateData: Dispatch<SetStateAction<IFormWorkRegister>>;
  setWorkId: Dispatch<SetStateAction<string>>;
  workRegister: (data: IFormWorkRegister) => void;
  workDelete: (data: string) => void;
  workUpdate: (id: string, data: IFormWorkRegister) => void;
}

export const WorksContext = createContext({} as IWorkContext);

function WorksProvider({ children }: IWorksProvider) {
  const [modalWorkRegister, setModalWorkRegister] = useState<boolean>(false);
  const [modalWorkUpdate, setModalWorkUpdate] = useState<boolean>(false);
  const [workId, setWorkId] = useState<string>("");
  const [workUpdateData, setWorkUpdateData] = useState<IFormWorkRegister>(
    {} as IFormWorkRegister
  );
  const [work, setWork] = useState<boolean>(false);
  const { setUser } = useContext(UserContext);

  function workRegister(data: IFormWorkRegister) {
    const token = localStorage.getItem("token");
    api
      .post("/users/works", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => sucessWorkRegister())
      .catch((err) => errorWorkRegister(err))
      .finally(loadPage);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api
        .get("/profile", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setUser(res.data))
        .catch((err) => console.log(err));
    }
  }, [work]);

  function sucessWorkRegister() {
    setTimeout(() => {
      toast.success("Experiência cadastrada com sucesso", { autoClose: 1500 });
      setModalWorkRegister(false);
      setWork(!work);
    }, 2000);
  }

  function errorWorkRegister(err: any) {
    err.message ===
    "User Already have this work created, you can only update it"
      ? setTimeout(() => {
          toast.error("Houve algum problema, tente novamente", {
            autoClose: 2100,
          });
        }, 2500)
      : setTimeout(() => {
          toast.error("Houve algum problema, tente novamente", {
            autoClose: 2100,
          });
        }, 2500);
  }

  function loadPage() {
    toast.warning("Processando...", {
      autoClose: 1500,
      closeOnClick: false,
      pauseOnHover: false,
    });
  }

  function workDelete(data: string) {
    const token = localStorage.getItem("token");
    api
      .delete(`/users/works/${data}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => sucessWorkDelete())
      .catch((err) => errorWorkDelete())
      .finally(loadPage);
  }

  function sucessWorkDelete() {
    setTimeout(() => {
      toast.success("Experiência deletada com sucesso", { autoClose: 2000 });
      setTimeout(() => {
        setModalWorkUpdate(false);
        setWork(!work);
      }, 1800);
    }, 1800);
  }

  function errorWorkDelete() {
    setTimeout(() => {
      toast.error("Houve algum problema, tente novamente", {
        autoClose: 2100,
      });
    }, 2500);
  }

  function workUpdate(id: string, data: IFormWorkRegister) {
    const token = localStorage.getItem("token");
    api
      .put(`/users/works/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => sucessWorkStatusUpdate())
      .catch((err) => errorWorkDelete())
      .finally(loadPage);
  }

  function sucessWorkStatusUpdate() {
    setTimeout(() => {
      toast.success("Experiência atualizada com sucesso", { autoClose: 1800 });
      setTimeout(() => {
        setModalWorkUpdate(false);
        setWork(!work);
      }, 1800);
    }, 1800);
  }

  return (
    <WorksContext.Provider
      value={{
        modalWorkRegister,
        setModalWorkRegister,
        workRegister,
        workDelete,
        modalWorkUpdate,
        setModalWorkUpdate,
        workUpdateData,
        setWorkUpdateData,
        workId,
        setWorkId,
        workUpdate,
      }}
    >
      {children}
      <ToastContainer
        closeButton={false}
        pauseOnHover={false}
        draggable={false}
      />
    </WorksContext.Provider>
  );
}

export default WorksProvider;
