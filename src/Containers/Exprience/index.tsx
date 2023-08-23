import { Divider, Grid, Typography } from "@mui/material";

export const Exprience = () => {
  return (
    <section style={{ width: "100%" }}>
      <Grid container spacing={3} pb={8}>
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
            Exprience
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
