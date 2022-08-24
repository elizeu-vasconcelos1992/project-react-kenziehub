import logo from "../../assets/logo.png";
import RegistrationForm from "../../components/RegistrationForm";
import { motion } from "framer-motion";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Registration() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [userLog, setUserLog] = useState<boolean>(false);

  function pageLogin() {
    navigate("/", { replace: true });
  }

  useEffect(() => {
    if (userLog) {
      toast.success("Você já está logado", {
        autoClose: 1800,
        transition: Zoom,
      });
      setTimeout(() => {
        navigate("/dashboard", { replace: true });
      }, 2500);
    }
  }, [navigate, userLog]);

  useEffect(() => {
    if (token) {
      setUserLog(true);
    }
  }, [token]);

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
          <RegistrationForm />
        </div>
      </Container>
      <ToastContainer />
    </motion.div>
  );
}

export default Registration;
