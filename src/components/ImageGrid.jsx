import {
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const useStyles = makeStyles({
  root: {
    marginTop: 50,
  },
  media: {
    height: "300px",
  },
  card: {
    opacity: 0.6,
  },
});

const ImageGrid = ({ handleOpen }) => {
  const classes = useStyles();
  const { docs } = useFirestore("images");

  return (
    <Container maxWidth="md" className={classes.root}>
      <Grid container spacing={3}>
        {docs &&
          docs.map((doc) => (
            <Grid item xs={12} md={6} lg={4} key={doc.id}>
              <Card
                className={classes.card}
                component={motion.div}
                whileHover={{ opacity: 1 }}
                layout
              >
                <CardActionArea onClick={() => handleOpen(doc.url)}>
                  <CardMedia
                    className={classes.media}
                    image={doc.url}
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default ImageGrid;
