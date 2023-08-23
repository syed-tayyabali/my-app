import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useTypeSelector } from "./App/hooks";
import { Counter } from "./Containers/Counter";
import { Main } from "./Containers/Main";
import { routePaths } from "./Router/paths";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#DEBA9D",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#212121",
    },
  },
});

const getActiveTheme = (themeMode: "light" | "dark") => {
  return themeMode === "light" ? lightTheme : darkTheme;
};

const App = () => {
  const [activeTheme, setActiveTheme] = useState<any>(darkTheme);
  const { selectedTheme } = useTypeSelector((state) => state.counter);

  useEffect(() => {
    setActiveTheme(getActiveTheme(selectedTheme));
  }, [selectedTheme]);

  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      <Main />
      <Routes>
        <Route path={routePaths.Counter.countPath()} element={<Counter />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
