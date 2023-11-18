import { Button, Grid, TextField } from "@mui/material";
import { forwardRef, useState } from "react";
import { DividerWithName } from "../../Components/DividerWithName";
import { contactFormBase } from "./constants";
import { CONTACT_FORM_ENUMS, IContactForm } from "./interface";

const textFieldStyle = {
  input: {
    "&::placeholder": {
      paddingLeft: 2,
    },
  },
  bgcolor: "#1D1D1D",
  "& .MuiInput-underline:before": { borderBottomColor: "red" },
  "& .MuiInput-underline:after": { borderBottomColor: "red" },
};

export const Contact = forwardRef((props, ref) => {
  const [contactForm, setcontactForm] = useState<IContactForm>(contactFormBase);

  const handleChange = (e: any) => {
    setcontactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log("contactForm", contactForm);
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{ marginBottom: "50px" }}
    >
      <DividerWithName name="contact" />
      <Grid
        container
        spacing={1}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <form style={{ width: 750 }} onSubmit={onSubmit}>
          <Grid pb={3} item xs={12}>
            <TextField
              name={CONTACT_FORM_ENUMS.name}
              onChange={handleChange}
              placeholder="Name"
              label="Name"
              InputLabelProps={{
                style: { paddingLeft: "15px", color: "white" },
              }}
              variant="standard"
              sx={{
                ...textFieldStyle,
                "& .MuiInputBase-root": {
                  height: 50,
                },
              }}
              size="medium"
              fullWidth
            />
          </Grid>

          <Grid pb={3} item xs={12}>
            <TextField
              name={CONTACT_FORM_ENUMS.email}
              onChange={handleChange}
              placeholder="E-mail Address"
              label="E-mail Address"
              InputLabelProps={{
                style: { paddingLeft: "15px", color: "white" },
              }}
              variant="standard"
              sx={{
                ...textFieldStyle,
                "& .MuiInputBase-root": {
                  height: 50,
                },
              }}
              fullWidth
            />
          </Grid>

          <Grid pb={3} item xs={12}>
            <TextField
              name={CONTACT_FORM_ENUMS.subject}
              onChange={handleChange}
              placeholder="Subject"
              label="Subject"
              InputLabelProps={{
                style: { paddingLeft: "15px", color: "white" },
              }}
              variant="standard"
              sx={{
                ...textFieldStyle,
                "& .MuiInputBase-root": {
                  height: 50,
                },
              }}
              fullWidth
            />
          </Grid>

          <Grid pb={3} item xs={12}>
            <TextField
              name={CONTACT_FORM_ENUMS.message}
              onChange={handleChange}
              placeholder="Message"
              label="Message"
              InputLabelProps={{
                style: { paddingLeft: "15px", color: "white" },
              }}
              multiline
              rows={4}
              maxRows={6}
              variant="standard"
              sx={{
                textArea: {
                  "&::placeholder": {
                    paddingLeft: 2,
                  },
                },
                bgcolor: "#1D1D1D",
                "& .MuiInput-underline:before": { borderBottomColor: "red" },
                "& .MuiInput-underline:after": { borderBottomColor: "red" },
              }}
              fullWidth
            />
          </Grid>

          <Grid pb={3} item xs={12}>
            <Button
              type="submit"
              variant="contained"
              sx={{ bgcolor: "red", color: "white", fontWeight: "bold" }}
            >
              Send Message
            </Button>
          </Grid>
        </form>
      </Grid>
    </section>
  );
});
