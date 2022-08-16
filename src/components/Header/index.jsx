import { useContext } from "react";
import logo from "../../assets/logo.png";
import { UserContext } from "../../context/UserContext";
import { HeaderDash } from "./style";

function Header() {
  const { logout } = useContext(UserContext);

  return (
    <HeaderDash>
      <img src={logo} alt="logomarca Kenzie hub" />
      <button onClick={logout}>Sair</button>
    </HeaderDash>
  );
}

export default Header;
