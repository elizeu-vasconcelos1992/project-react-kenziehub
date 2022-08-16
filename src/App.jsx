import "./App.css";
import TechsProvider from "./context/TechsContext";
import UserProvider from "./context/UserContext";

import Routing from "./routes";

function App() {
  return (
    <UserProvider>
      <TechsProvider>
        <div className="App">
          <Routing />
        </div>
      </TechsProvider>
    </UserProvider>
  );
}

export default App;
