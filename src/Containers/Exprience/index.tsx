import { Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import { DividerWithName } from "../../Components/DividerWithName";
import { TabPanel } from "../../Components/TabPanel";
import { a11yProps, colors } from "../../Constants";
import { CompanyIcon } from "./CompanyIcon";
import { companyDes, companyLinks } from "./Constant";

export const Exprience = React.forwardRef((props, ref) => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const typoGraphyColor = theme.palette.mode === "light" ? "#000" : "#C8C8C8";

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{ width: "100%", marginBottom: "50px" }}
    >
      <DividerWithName name={"Exprience"} />
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
            label="10Pearls"
            {...a11yProps(0)}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div style={{ marginBottom: "32px" }}>
            <h2
              style={{ marginBottom: 0, fontWeight: 500, lineHeight: "21px" }}
            >
              Full stack web developer @{" "}
              <a
                style={{
                  color: colors.orange,
                  textDecoration: "none",
                }}
                href="https://10pearls.com/"
              >
                10Pearls
              </a>
            </h2>
            <Typography fontSize={18} color={typoGraphyColor}>
              {" "}
              Dec 2020 - Present
            </Typography>
          </div>
          <div>
            {companyDes.map((item, index) => (
              <div key={index} style={{ paddingTop: 16 }}>
                <Typography component="h3" fontSize={22} fontWeight={400}>
                  {item.title}
                </Typography>
                <Typography fontWeight={"lighter"} color={typoGraphyColor}>
                  {item.description}
                </Typography>
              </div>
            ))}
          </div>
          <div
            style={{ paddingTop: 16, display: "flex", flexDirection: "row" }}
          >
            {companyLinks.map((item: any) => (
              <CompanyIcon compLinkObj={item} currTheme={theme} />
            ))}
          </div>
        </TabPanel>
      </Box>
    </section>
  );
});
