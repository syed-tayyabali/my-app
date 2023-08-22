import { Box, Divider, Grid, Typography } from "@mui/material";

export const About = () => {
  return (
    <section
      style={{ marginLeft: "270px", paddingLeft: "24px", width: "100%" }}
    >
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Divider
            sx={{ bgcolor: "red", borderBottomWidth: 2, marginTop: "22px" }}
          />
        </Grid>
        <Grid item xs={2}>
          <Typography
            component="h4"
            textTransform="uppercase"
            fontSize="30px"
            fontWeight="500"
            align="left"
            marginLeft="10px"
          >
            About
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Divider
            sx={{ bgcolor: "red", borderBottomWidth: 2, marginTop: "22px" }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        // sx={{ maxWidth: 1079.03 }}
      >
        <Grid item xs={6}>
          <Box component="div">
            <Typography align="left">
              abc Hello there, my name is Mehdi Ben Hadj Ali and i love doing
              stuff for internet espacially open-source projects. My love for
              the development started when i was 14: i was playing a french
              video game called Dofus and i wanted to automate repetitive things
              so i built a bot for the game (it's not fair i know 🙁). Now, i
              mainly develop MERN stack apps, i'm open to new opportunities.
            </Typography>
          </Box>
          <Box></Box>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </section>
  );
};
