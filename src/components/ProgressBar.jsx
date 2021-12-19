import { LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const useStyles = makeStyles({
  progressDiv: {
    width: "70vw",
    margin: "auto",
    marginBottom: 30,
  },
});

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);
  const classes = useStyles();

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div className={classes.progressDiv}>
      <LinearProgress
        variant="determinate"
        value={progress}
        color="secondary"
      />
    </div>
  );
};

export default ProgressBar;
