import React, { useState } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@material-ui/core";
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import ModalContainer from "./components/Modal";

const theme = createTheme({});

const App = () => {
  const [selectedImg, setSelectedimg] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (url) => {
    setOpen(true);
    setSelectedimg(url);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Title />
        <UploadForm />
        <ImageGrid handleOpen={handleOpen} />
        <ModalContainer
          selectedImg={selectedImg}
          open={open}
          handleClose={handleClose}
        />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
