import { Box, Grid, Paper, Typography } from "@mui/material";
import { forwardRef } from "react";
import { DividerWithName } from "../../Components/DividerWithName";
import profile from "../../Images/profile.jpg";

const paperStyle = {
  backgroundColor: "#d62814",
  minWidth: "50px",
  color: "white",
  marginRight: "10px",
  marginBottom: "10px",
  padding: "10px",
};

const paperText = [
  "React JS",
  "Next JS",
  "Material UI",
  "Style Component",
  "Node JS",
  "Express JS",
  "Firebase",
];

export const About = forwardRef((props, ref) => {
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{ width: "100%", marginBottom: "150px" }}
    >
      <DividerWithName name={"About"} />
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={8}>
          <Box>
            <Typography align={"left"}>
              abc Hello there, my name is Mehdi Ben Hadj Ali and i love doing
              stuff for internet espacially open-source projects. My love for
              the development started when i was 14: i was playing a french
              video game called Dofus and i wanted to automate repetitive things
              so i built a bot for the game (it's not fair i know 🙁). Now, i
              mainly develop MERN stack apps, i'm open to new opportunities.
            </Typography>
          </Box>
          <Box pt={3} pb={3} display={"flex"} flexWrap={"wrap"}>
            {paperText.map((item: string, index: number) => (
              <Paper key={index} sx={paperStyle}>
                <Typography>{item}</Typography>
              </Paper>
            ))}
          </Box>
        </Grid>
        <Grid item xs={4}>
          <img
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
            }}
            src={profile}
            alt="Tayyab"
          />
        </Grid>
      </Grid>
    </section>
  );
});
