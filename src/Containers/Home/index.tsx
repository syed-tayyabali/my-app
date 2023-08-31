import { Box, Button, Grid, Typography } from "@mui/material";
import { colors } from "../../Constants";
import jS from "../../Images/js.png";
import reactImage from "../../Images/react.png";
import reduxImage from "../../Images/redux.png";
import tS from "../../Images/ts.png";
import "./index.css";

export const Home = ({ contactRef }: { contactRef: any }) => {
  return (
    <Grid container spacing={2} justifyContent={"space-between"}>
      <Grid item xs={8}>
        <Box pt={32} pb={3} sx={{ minHeight: "100vh" }}>
          <Typography
            variant="h5"
            component="div"
            align="left"
            sx={{ color: colors.orange }}
          >
            Hi there <span className="wave">👋</span>, I'm
          </Typography>
          <Typography
            variant="h5"
            component="div"
            align="left"
            fontSize="40px"
            fontWeight="bolder"
            className="text-gradiant text-stretchV text-stretchH"
            letterSpacing="5px"
          >
            SYED TAYYAB ALI
          </Typography>
          <Typography
            component="p"
            variant="h2"
            color="#2C394B"
            fontSize="75px"
            paddingTop="20px"
            marginBottom="16px"
            align="left"
          >
            I make awesome websites
          </Typography>
          <Typography
            align="left"
            fontWeight="300"
            fontSize="18px"
            marginBottom="0"
            sx={{ opacity: 1, transform: "none" }}
          >
            Full stack web developer, UI/UX designer, freelancer, Github addict.
          </Typography>
          <Typography
            align="left"
            fontWeight="300"
            fontSize="18px"
            marginBottom="30px"
            sx={{ opacity: 1, transform: "none" }}
          >
            Based in sousse, Karachi Pakistan.
          </Typography>
          <Box>
            <Button
              variant="outlined"
              color="error"
              sx={{ float: "left", textTransform: "none" }}
              onClick={() =>
                contactRef.current?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get in touch
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box pt={32}>
          <img
            style={{
              width: "40%",
              height: "40%",
              borderRadius: "50%",
              marginBottom: "10px",
            }}
            src={jS}
            alt="JavaScript"
            className="vert-move"
          />
          <img
            style={{
              width: "40%",
              height: "40%",
              borderRadius: "50%",
              marginBottom: "10px",
            }}
            src={tS}
            alt="typescript"
            className="vert-move"
          />
          <img
            style={{
              width: "40%",
              height: "40%",
              borderRadius: "50%",
              marginBottom: "10px",
            }}
            src={reactImage}
            alt="reactImage"
            className="vert-move"
          />
          <img
            style={{
              width: "40%",
              height: "40%",
              borderRadius: "50%",
              marginBottom: "10px",
            }}
            src={reduxImage}
            alt="reduxImage"
            className="vert-move"
          />
        </Box>
      </Grid>
    </Grid>
  );
};
