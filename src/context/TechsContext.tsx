/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, ReactNode, SetStateAction, useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { IInfoDataRegister } from "../components/TechRegisterForm";
import { IInfoDataUpdate } from "../components/TechUpdateForm";
import api from "../services";
import { UserContext } from "./UserContext";

interface ITechsProvider {
  children: ReactNode;
}

interface ITechsContext {
  modalRegister: boolean;
  setModalRegister: Dispatch<SetStateAction<boolean>>;
  modalUpdate: boolean;
  setModalUpdate: Dispatch<SetStateAction<boolean>>;
  techRegister: (data: IInfoDataRegister) => void;
  techDelete: (info: string) => void;
  techId: string;
  setTechId: Dispatch<SetStateAction<string>>;
  techTitle: string;
  setTechTitle: Dispatch<SetStateAction<string>>;
  techStatus: string;
  setTechStatus: Dispatch<SetStateAction<string>>;
  techStatusUpdate: (id: string, data: IInfoDataUpdate) => void;
}

export const TechsContext = createContext({} as ITechsContext);

export default function TechsProvider({ children }: ITechsProvider) {
  const [modalRegister, setModalRegister] = useState<boolean>(false);
  const [modalUpdate, setModalUpdate] = useState<boolean>(false);
  const [techId, setTechId] = useState<string>("");
  const [techTitle, setTechTitle] = useState<string>("");
  const [techStatus, setTechStatus] = useState<string>("");
  const [tech, setTech] = useState<boolean>(false);
  const { setUser } = useContext(UserContext);

  function techRegister(data: IInfoDataRegister) {
    const token = localStorage.getItem("token");
    api
      .post("/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => sucessTechRegister())
      .catch((err) => errorTechRegister(err))
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
  }, [tech]);

  function sucessTechRegister() {
    setTimeout(() => {
      toast.success("Tecnologia cadastrada com sucesso", { autoClose: 1500 });
      setModalRegister(false);
      setTech(!tech);
    }, 2000);
  }

  function errorTechRegister(err: any) {
    err.message ===
    "User Already have this technology created, you can only update it"
      ? setTimeout(() => {
          toast.error("Houve algum problema, tente novamente", {
            autoClose: 2100,
          });
        }, 2500)
      : setTimeout(() => {
          toast.error("Tecnologia já está cadastrada", {
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

  function techDelete(info: string) {
    const token = localStorage.getItem("token");
    api
      .delete(`/users/techs/${info}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => sucessTechDelete())
      .catch((err) => errorTechDelete())
      .finally(loadPage);
  }

  function sucessTechDelete() {
    setTimeout(() => {
      toast.success("Tecnologia deletada com sucesso", { autoClose: 2000 });
      setTimeout(() => {
        setModalUpdate(false);
        setTech(!tech);
      }, 1800);
    }, 1800);
  }

  function errorTechDelete() {
    setTimeout(() => {
      toast.error("Houve algum problema, tente novamente", {
        autoClose: 2100,
      });
    }, 2500);
  }

  function techStatusUpdate(id: string, data: IInfoDataUpdate) {
    const token = localStorage.getItem("token");
    api
      .put(`/users/techs/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => sucessTechStatusUpdate())
      .catch((err) => errorTechDelete())
      .finally(loadPage);
  }

  function sucessTechStatusUpdate() {
    setTimeout(() => {
      toast.success("Tecnologia atualizada com sucesso", { autoClose: 1800 });
      setTimeout(() => {
        setModalUpdate(false);
        setTech(!tech);
      }, 1800);
    }, 1800);
  }

  return (
    <TechsContext.Provider
      value={{
        modalRegister,
        setModalRegister,
        modalUpdate,
        setModalUpdate,
        techRegister,
        techDelete,
        techId,
        setTechId,
        techTitle,
        setTechTitle,
        techStatus,
        setTechStatus,
        techStatusUpdate,
      }}
    >
      {children}
      <ToastContainer
        closeButton={false}
        pauseOnHover={false}
        draggable={false}
      />
    </TechsContext.Provider>
  );
}
