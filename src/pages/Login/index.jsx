import logo from "../../assets/logo.png";
import LoginForm from "../../components/LoginForm";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services";
import { useEffect, useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const userLog = JSON.parse(localStorage.getItem("userInfo"));

  function pageRegistration() {
    navigate("/registration", { replace: true });
  }

  useEffect(() => {
    if (user) {
      toast.success("Redirecinando...", { autoClose: 1800 });
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

  function sucessLogin(info) {
    setTimeout(() => {
      toast.success("Redirecionando...", { autoClose: 1500 });
      setTimeout(() => {
        localStorage.clear();
        localStorage.setItem("token", info.data.token);
        localStorage.setItem("userId", info.data.user.id);
        localStorage.setItem("userInfo", JSON.stringify(info.data));
        navigate("/dashboard", { replace: true });
      }, 2500);
    }, 2500);
  }

  function errorLogin(err) {
    setTimeout(() => {
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

  function kenzieApi(data) {
    api
      .post("/sessions", data)
      .then((res) => {
        sucessLogin(res);
      })
      .catch((err) => errorLogin(err))
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
        <img src={logo} alt="logomarca Kenzie hub" />
        <div>
          <h3>Login</h3>
          <LoginForm kenzieApi={kenzieApi} />
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
