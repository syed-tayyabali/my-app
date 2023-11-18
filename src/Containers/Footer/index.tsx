import { Typography } from "@mui/material";
import { DividerWithName } from "../../Components/DividerWithName";

export const Footer = () => {
  return (
    <section style={{ marginBottom: "50px" }}>
      <DividerWithName />
      <div>
        <Typography>© 2023 Syed Tayyab Ali, Inc</Typography>
      </div>
    </section>
  );
};
