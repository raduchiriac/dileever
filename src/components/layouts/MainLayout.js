import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ContactsIcon from "@material-ui/icons/Contacts";
import MainMenu from "../MainMenu";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
  children: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
});

export default function MainLayout({ children }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} direction="column">
      <Box className={classes.children}>{children}</Box>
      <MainMenu />
    </Grid>
  );
}
