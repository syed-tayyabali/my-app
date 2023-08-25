import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import { About } from "../About";
import { AppToolbar } from "../AppToolbar";
import { Exprience } from "../Exprience";
import { Home } from "../Home";

export const Main = () => {
  return (
    <Box component="main">
      <AppToolbar />
      <Container maxWidth={"xl"} sx={{ marginLeft: "14vh" }}>
        <Home />
        <About />
        <Exprience />
      </Container>
    </Box>
  );
};
