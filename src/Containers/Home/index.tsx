import { Box, Button, Typography } from "@mui/material";
import { colors } from "../../Constants";
import "./index.css";

export const Home = () => {
  return (
    <Box width={1} pt={32} pb={3} sx={{ minHeight: "100vh" }}>
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
        >
          Get in touch
        </Button>
      </Box>
    </Box>
  );
};
