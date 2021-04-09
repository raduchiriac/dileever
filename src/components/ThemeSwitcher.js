import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import { useTheme } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { GlobalContext } from "../lib/contexts/GlobalContext";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    right: "0.5rem",
    top: "0.5rem",
  },
}));

const ThemeSwitcher = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const dispatchGlobally = useContext(GlobalContext).dispatchGlobally;

  const handleTogglePaletteType = () => {
    const newTheme = theme.palette.type == "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    dispatchGlobally({ type: "set-theme", payload: newTheme });
  };

  return (
    <IconButton color="inherit" onClick={() => handleTogglePaletteType()} aria-label="theme-switch" className={classes.root}>
      {theme.palette.type === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
    </IconButton>
  );
};

ThemeSwitcher.propTypes = {};

export default ThemeSwitcher;
