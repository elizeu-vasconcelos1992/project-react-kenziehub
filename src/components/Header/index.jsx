import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { HeaderDash } from "./style";

function Header() {
  const navigate = useNavigate();

  function pageLogin() {
    navigate("/", { replace: true });
    localStorage.clear();
  }

  return (
    <HeaderDash>
      <img src={logo} alt="logomarca Kenzie hub" />
      <button onClick={pageLogin}>Sair</button>
    </HeaderDash>
  );
}

export default Header;
