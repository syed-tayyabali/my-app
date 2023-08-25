import { Divider, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import { TabPanel } from "../../Components/TabPanel";
import { a11yProps } from "../../Constants";

export const Exprience = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <section style={{ width: "100%", marginBottom: "50px" }}>
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

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#bf360c",
            },
          }}
        >
          <Tab
            style={{
              color: value === 0 ? "#bf360c" : "",
            }}
            label="Item One"
            {...a11yProps(0)}
          />
          <Tab
            style={{
              color: value === 1 ? "#bf360c" : "",
            }}
            label="Item Two"
            {...a11yProps(1)}
          />
          <Tab
            style={{
              color: value === 2 ? "#bf360c" : "",
            }}
            label="Item Three"
            {...a11yProps(2)}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </section>
  );
};
