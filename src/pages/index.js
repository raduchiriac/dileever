import React from "react";
import ThemeSwitcher from "../components/ThemeSwitcher";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.primary.main,
    userSelect: "none",
    width: "100%",
  },
  bullet: {
    fontSize: "5rem",
    opacity: 0.33,
    transform: "translateY(0.5rem)",
  },
}));

export default function Index() {
  const classes = useStyles();
  const bullet = (
    <Typography variant="h4" className={classes.bullet}>
      •
    </Typography>
  );

  return (
    <Box component="div" className={classes.root}>
      <ThemeSwitcher />
      <Typography variant="h2">di</Typography>
      {bullet}
      <Typography variant="h2">lee</Typography>
      {bullet}
      <Typography variant="h2">ver</Typography>
    </Box>
  );
}
