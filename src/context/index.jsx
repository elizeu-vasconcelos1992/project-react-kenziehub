import TechsProvider from "./TechsContext";
import UserProvider from "./UserContext";

function GlobalProvider({ children }) {
  return (
    <UserProvider>
      <TechsProvider>{children}</TechsProvider>
    </UserProvider>
  );
}

export default GlobalProvider;
