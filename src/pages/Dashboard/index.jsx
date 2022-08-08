import Header from "../../components/Header";
import Main from "../../components/Main";
import { motion } from "framer-motion";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    function pageLogin() {
      if (!user) {
        navigate("/", { replace: true });
      }
    }
    pageLogin();
  }, [navigate, user]);

  if (user) {
    return (
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 2 }}
      >
        <Container>
          <Header />
          <Main user={user} />
        </Container>
      </motion.div>
    );
  }
}

export default Dashboard;
