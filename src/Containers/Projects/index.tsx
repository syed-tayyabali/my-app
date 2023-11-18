import { Grid } from "@mui/material";
import { forwardRef, useState } from "react";
import { AreaCard } from "../../Components/AreaCard";
import { DividerWithName } from "../../Components/DividerWithName";
import { MuiModal } from "../../Components/MuiModal";
import { cardData, modalDataBase } from "../../Constants";
import { IModalData } from "./interfaces";

export const Projects = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState<IModalData>(modalDataBase);

  const handleOpen = (data: IModalData) => {
    setModalData(data);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{ marginBottom: "50px" }}
    >
      <DividerWithName name={"Projects"} />
      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        {cardData.map((item, index) => (
          <Grid item xs={12} sm={6} md={3}>
            <AreaCard data={item} handleClick={() => handleOpen(item)} />
          </Grid>
        ))}
      </Grid>

      <MuiModal
        modalData={modalData}
        handleClose={handleClose}
        modalOpen={open}
      />
    </section>
  );
});
