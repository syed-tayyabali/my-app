import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { IModalData } from "../../Containers/Projects/interfaces";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 465,
  bgcolor: "#272727",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "20px",
  p: 4,
};

interface Props {
  modalData: IModalData;
  handleClose: any;
  modalOpen: boolean;
}

export const MuiModal = ({ modalOpen, handleClose, modalData }: Props) => {
  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component="img"
            sx={{
              height: 233,
              width: 400,
              maxHeight: { xs: 233, md: 167 },
              marginBottom: "20px",
              borderRadius: "8px",
            }}
            alt="The house from the offer."
            src={modalData.img}
          />
          <Typography
            id="modal-modal-title"
            fontWeight={"bold"}
            variant="h5"
            component="h2"
          >
            {modalData.cardHeading}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {modalData.description}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <strong>Technologies:</strong> {modalData.tools}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
