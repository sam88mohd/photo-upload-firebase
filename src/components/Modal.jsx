import { makeStyles, Modal } from "@material-ui/core";
import React, { useState } from "react";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 0.5),
  },
  img: {
    width: "100%",
    height: "100%",
  },
}));

const ModalContainer = ({ selectedImg, open, handleClose }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <div className={classes.paper} style={modalStyle}>
          <img src={selectedImg} alt="selected img" className={classes.img} />
        </div>
      </Modal>
    </div>
  );
};

export default ModalContainer;
