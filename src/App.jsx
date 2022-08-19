import "./App.css";
import GlobalProvider from "./context";

import Routing from "./routes";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Routing />
      </div>
    </GlobalProvider>
  );
}

export default App;
