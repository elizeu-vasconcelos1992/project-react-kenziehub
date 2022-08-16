import Header from "../../components/Header";
import Main from "../../components/Main";
import { motion } from "framer-motion";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Dashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/", { replace: true });
    }
  }, [token, navigate]);

  if (token) {
    return (
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 2 }}
      >
        <Container>
          <Header />
          <Main />
        </Container>
      </motion.div>
    );
  }
}

export default Dashboard;
