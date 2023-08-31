import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import { useRef } from "react";
import { About } from "../About";
import { AppToolbar } from "../AppToolbar";
import { Contact } from "../Contact";
import { Exprience } from "../Exprience";
import { Footer } from "../Footer";
import { Home } from "../Home";
import { Projects } from "../Projects";

export const Main = () => {
  const aboutRef = useRef<HTMLElement>();
  const expRef = useRef<HTMLElement>();
  const projRef = useRef<HTMLElement>();
  const contactRef = useRef<HTMLElement>();

  const references = {
    aboutRef,
    expRef,
    projRef,
    contactRef,
  };

  return (
    <Box component="main">
      <Container maxWidth={"xl"} sx={{ marginLeft: "14vh" }}>
        <AppToolbar references={references} />
        <Home contactRef={contactRef} />
        <About ref={aboutRef} />
        <Exprience ref={expRef} />
        <Projects ref={projRef} />
        <Contact ref={contactRef} />
        <Footer />
      </Container>
    </Box>
  );
};
