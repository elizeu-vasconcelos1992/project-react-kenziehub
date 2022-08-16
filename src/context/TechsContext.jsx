import { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import api from "../services";
import { UserContext } from "./UserContext";

export const TechsContext = createContext({});

export default function TechsProvider({ children }) {
  const [modalRegister, setModalRegister] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [techId, setTechId] = useState(null);
  const [techTitle, setTechTitle] = useState(null);
  const [techStatus, setTechStatus] = useState(null);
  const [tech, setTech] = useState(null);
  const { setUser } = useContext(UserContext);

  function techRegister(data) {
    const token = localStorage.getItem("token");
    api
      .post("/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => sucessTechRegister(res))
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

  function sucessTechRegister(res) {
    setTimeout(() => {
      toast.success("Tecnologia cadastrada com sucesso", { autoClose: 1500 });
      setModalRegister(false);
      setTech(res);
    }, 2000);
  }

  function errorTechRegister(err) {
    err.message ===
    "User Already have this technology created, you can only update it"
      ? setTimeout(() => {
          toast.error("Falha na conexão, verique sua internet", {
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

  function techDelete(info) {
    const token = localStorage.getItem("token");
    api
      .delete(`/users/techs/${info}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => sucessTechDelete(res))
      .catch((err) => errorTechDelete(err))
      .finally(loadPage);
  }

  function sucessTechDelete(res) {
    setTimeout(() => {
      toast.success("Tecnologia deletada com sucesso", { autoClose: 2000 });
      setTimeout(() => {
        setModalUpdate(false);
        setTech(res);
      }, 1800);
    }, 1800);
  }

  function errorTechDelete(err) {
    setTimeout(() => {
      toast.error("Falha na conexão, verique sua internet", {
        autoClose: 2100,
      });
    }, 2500);
  }

  function techStatusUpdate(id, data) {
    const token = localStorage.getItem("token");
    api
      .put(`/users/techs/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => sucessTechStatusUpdate(res))
      .catch((err) => console.log(err))
      .finally(loadPage);
  }

  function sucessTechStatusUpdate(res) {
    setTimeout(() => {
      toast.success("Tecnologia atualizada com sucesso", { autoClose: 1800 });
      setTimeout(() => {
        setModalUpdate(false);
        setTech(res);
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
