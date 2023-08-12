import Box from "@mui/material/Box";
import { AppToolbar } from "../AppToolbar";
import { Home } from "../Home";
import { About } from "../About";

export const Main = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ p: 3 }}>
        <AppToolbar />
        <Home />
        <About />
      </Box>
    </Box>
  );
};
