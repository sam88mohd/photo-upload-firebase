import {
  Container,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import BackupOutlinedIcon from "@material-ui/icons/BackupOutlined";
import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const useStyles = makeStyles({
  input: {
    display: "none",
  },
  iconButton: {
    display: "flex",
    justifyContent: "center",
  },
});

const UploadForm = () => {
  const classes = useStyles();
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/jpeg", "image/png"];

  const changeHandler = (e) => {
    const selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setError("Please select image type (jpeg or png)");
      setFile(null);
    }
  };

  return (
    <React.Fragment>
      <Container className={classes.iconButton}>
        <input
          type="file"
          accept="image/*"
          id="icon-button"
          className={classes.input}
          onChange={changeHandler}
        />
        <label htmlFor="icon-button">
          <IconButton color="primary" component="span">
            <BackupOutlinedIcon fontSize="large" />
          </IconButton>
        </label>
      </Container>
      {error && (
        <Typography variant="body2" align="center" color="error">
          {error}
        </Typography>
      )}
      {file && (
        <React.Fragment>
          <Typography variant="body2" align="center" gutterBottom>
            {file.name}
          </Typography>
          <ProgressBar file={file} setFile={setFile} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default UploadForm;
