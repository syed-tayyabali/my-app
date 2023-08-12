import { Divider, Grid, Typography } from "@mui/material";

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
        <Grid item xs={2} width="75%">
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
    </section>
  );
};
