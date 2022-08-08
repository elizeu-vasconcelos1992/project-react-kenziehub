import logo from "../../assets/logo.png";
import RegistrationForm from "../../components/RegistrationForm";
import { motion } from "framer-motion";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services";

function Registration() {
  const [user, setUser] = useState(false);
  const userLog = JSON.parse(localStorage.getItem("userInfo"));
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      toast.success("Redirecionando...", { autoClose: 1800 });
      setTimeout(() => {
        navigate("/dashboard", { replace: true });
      }, 2500);
    }
  }, [navigate, user]);

  useEffect(() => {
    if (userLog) {
      setUser(true);
    }
  }, [userLog]);

  function pageLogin() {
    navigate("/", { replace: true });
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
    setTimeout(() => {
      toast.error("Erro no cadastro, tente novamente", { autoClose: 2100 });
    }, 2500);
  }

  function loadPage() {
    toast.warning("Cadastrando...", {
      autoClose: 2400,
      closeOnClick: false,
      pauseOnHover: false,
    });
  }

  function kenzieApi(info) {
    api
      .post("/users", info)
      .then((res) => {
        sucessRegister(res);
      })
      .catch((err) => errorRegister(err))
      .finally(loadPage);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Container>
        <div className="div-header">
          <img src={logo} alt="logomarca Kenzie hub" />
          <button className="button-previous" onClick={pageLogin}>
            Voltar
          </button>
        </div>
        <div className="div-form">
          <h3>Crie sua conta</h3>
          <span>Rápida e grátis, vamos nessa</span>
          <RegistrationForm kenzieApi={kenzieApi} />
        </div>
      </Container>
      <ToastContainer />
    </motion.div>
  );
}

export default Registration;
