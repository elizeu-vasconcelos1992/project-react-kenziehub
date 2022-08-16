import logo from "../../assets/logo.png";
import LoginForm from "../../components/LoginForm";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";

function Login() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [userLog, setUserLog] = useState(false);

  function pageRegistration() {
    navigate("/registration", { replace: true });
  }

  useEffect(() => {
    if (userLog) {
      toast.success("Você ja está logado", {
        autoClose: 1800,
        transition: Zoom,
      });
      setTimeout(() => {
        navigate("/dashboard", { replace: true });
      }, 2500);
    }
  }, [navigate, userLog]);

  useEffect(() => {
    if (user) {
      setUserLog(true);
    }
  }, [user]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Container>
        <img src={logo} alt="logomarca Kenzie hub" />
        <div>
          <h3>Login</h3>
          <LoginForm />
          <span>Ainda não possui uma conta?</span>
          <button className="button-register" onClick={pageRegistration}>
            Cadastre-se
          </button>
        </div>
      </Container>
      <ToastContainer />
    </motion.div>
  );
}

export default Login;
