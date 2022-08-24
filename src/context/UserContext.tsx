import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import api from "../services";
import { IDataLogin } from "../components/LoginForm";
import { IInfoRegister } from "../components/RegistrationForm";

interface IUserProvider {
  children: ReactNode;
}

export interface ITechs {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
}

export interface IWorks {
  created_at: string;
  deploy_url: string;
  description: string;
  id: string;
  title: string;
  updated_at: string;
}

export interface IUser {
  avatar_url: string;
  bio: string;
  contact: string;
  course_module: string;
  created_at: string;
  email: string;
  id: string;
  name: string;
  techs: ITechs[];
  works: IWorks[];
}

export interface ILoginResponse {
  token: string;
  user: IUser;
}

interface IUserContext {
  kenzieApiLogin: (data: IDataLogin) => void;
  kenzieApiRegistration: (data: IInfoRegister) => void;
  logout: () => void;
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
}

export const UserContext = createContext({} as IUserContext);

function UserProvider({ children }: IUserProvider) {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser>({} as IUser);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api
        .get("/profile", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => clearLocalStorage());
    }
  }, []);

  function clearLocalStorage() {
    localStorage.clear();
  }

  function kenzieApiLogin(data: IDataLogin) {
    api
      .post("/sessions", data)
      .then((res) => {
        sucessLogin(res.data);
      })
      .catch((err) => errorLogin(err))
      .finally(loadPage);
  }

  function sucessLogin(info: ILoginResponse) {
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

  function errorLogin(err: any) {
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

  function kenzieApiRegistration(data: IInfoRegister) {
    api
      .post("/users", data)
      .then((res) => {
        sucessRegister();
      })
      .catch((err) => errorRegister(err))
      .finally(loadPageRegistration);
  }

  function sucessRegister() {
    setTimeout(() => {
      toast.success("Redirecionando para o Login", { autoClose: 1500 });
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 2500);
    }, 2500);
  }

  function errorRegister(err: any) {
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

export default UserProvider;
