import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    marginTop: "60px",
  },
});

const Title = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Typography variant="h5" component="h1" color="primary" gutterBottom>
        Muka Buku
      </Typography>
      <Container maxWidth="sm" className={classes.title}>
        <Typography
          variant="h3"
          component="h2"
          color="textPrimary"
          align="center"
          gutterBottom
        >
          Your Picture
        </Typography>
        <Typography variant="body1" paragraph align="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </Container>
    </Container>
  );
};

export default Title;
