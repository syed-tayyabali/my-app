import { Divider, Grid, Typography } from "@mui/material";
import { memo } from "react";

interface Props {
  name?: string;
}

const styled = {
  bgcolor: "red",
  borderBottomWidth: 2,
  marginTop: "22px",
};

export const DividerWithName = memo(({ name }: Props) => {
  return (
    <>
      {name ? (
        <Grid container spacing={3} pb={8}>
          <Grid item xs={3}>
            <Divider sx={styled} />
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
              {name}
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Divider sx={styled} />
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={1} pb={8}>
          <Grid item xs={12}>
            <Divider sx={styled} />
          </Grid>
        </Grid>
      )}
    </>
  );
});
