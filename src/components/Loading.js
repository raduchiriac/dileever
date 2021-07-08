import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    backgroundColor: theme.palette.type == "dark" ? "rgba(0, 0, 0, 0.66)" : "rgba(250, 250, 250, 0.8)",
    backdropFilter: "blur(4px)",
    zIndex: theme.zIndex.drawer + 1,
    color: theme.palette.primary.main,
  },
}));

export default function Loading() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  return (
    <Backdrop className={classes.backdrop} open={open} onClick={() => {}}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
