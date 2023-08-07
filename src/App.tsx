import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Counter } from "./Containers/Counter";
import { Main } from "./Containers/Main";
import { routePaths } from "./Router/paths";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path={routePaths.Counter.countPath()} element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
