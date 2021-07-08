import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButton({ ...props }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Fab color="primary" aria-label="add" onClick={props.onClick}>
        <AddIcon />
      </Fab>
    </Box>
  );
}
