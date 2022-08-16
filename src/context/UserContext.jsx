import { createContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import api from "../services";

export const UserContext = createContext({});

export default function UserProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api
        .get("/profile", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setUser(res.data))
        .catch((err) => clearLocalStorage(err));
    }
  }, []);

  function clearLocalStorage() {
    localStorage.clear();
  }

  function kenzieApiLogin(data) {
    api
      .post("/sessions", data)
      .then((res) => {
        sucessLogin(res.data);
      })
      .catch((err) => errorLogin(err))
      .finally(loadPage);
  }

  function sucessLogin(info) {
    setTimeout(() => {
      toast.success("Login realizado com sucesso", { autoClose: 1500 });
      setTimeout(() => {
        localStorage.clear();
        localStorage.setItem("token", info.token);
        localStorage.setItem("userId", info.user.id);
        setUser(info.user);
        navigate("/dashboard", { replace: true });
      }, 2500);
    }, 2500);
  }

  function errorLogin(err) {
    err.message === "Network Error"
      ? setTimeout(() => {
          toast.error("Falha na conexão, verique sua internet", {
            autoClose: 2100,
          });
        }, 2500)
      : setTimeout(() => {
          toast.error("Email e senha não combinam", { autoClose: 2100 });
        }, 2500);
  }

  function loadPage() {
    toast.warning("Conectando...", {
      autoClose: 2400,
      closeOnClick: false,
      pauseOnHover: false,
    });
  }

  function kenzieApiRegistration(data) {
    api
      .post("/users", data)
      .then((res) => {
        sucessRegister(res);
      })
      .catch((err) => errorRegister(err))
      .finally(loadPageRegistration);
  }

  function sucessRegister(info) {
    setTimeout(() => {
      toast.success("Redirecionando para o Login", { autoClose: 1500 });
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 2500);
    }, 2500);
  }

  function errorRegister(err) {
    err.response.data.message === "Email already exists"
      ? setTimeout(() => {
          toast.error("Email já cadastrado", { autoClose: 2100 });
        }, 2500)
      : setTimeout(() => {
          toast.error("Erro no cadastro, tente novamente", { autoClose: 2100 });
        }, 2500);
  }

  function loadPageRegistration() {
    toast.warning("Cadastrando...", {
      autoClose: 2400,
      closeOnClick: false,
      pauseOnHover: false,
    });
  }

  function logout() {
    toast("🙃 Você está saindo, até a próxima 🙂", {
      autoClose: 1800,
      position: "top-center",
    });
    setTimeout(() => {
      setUser(null);
      localStorage.clear();
      navigate("/", { replace: true });
    }, 2500);
  }

  return (
    <UserContext.Provider
      value={{
        kenzieApiLogin,
        user,
        setUser,
        kenzieApiRegistration,
        logout,
      }}
    >
      {children}
      <ToastContainer
        closeButton={false}
        pauseOnHover={false}
        draggable={false}
      />
    </UserContext.Provider>
  );
}
