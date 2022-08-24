import { ReactNode } from "react";
import TechsProvider from "./TechsContext";
import UserProvider from "./UserContext";
import WorksProvider from "./WorksContext";

interface IGlobalProvider {
  children: ReactNode;
}

function GlobalProvider({ children }: IGlobalProvider) {
  return (
    <UserProvider>
      <WorksProvider>
        <TechsProvider>{children}</TechsProvider>
      </WorksProvider>
    </UserProvider>
  );
}

export default GlobalProvider;
