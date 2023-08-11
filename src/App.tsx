import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Counter } from "./Containers/Counter";
import { Main } from "./Containers/Main";
import { routePaths } from "./Router/paths";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#212121", color: "white" }}>
      <Main />
      <Routes>
        <Route path={routePaths.Counter.countPath()} element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
