import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import MainMenu from "../MainMenu";
import useI18n from "../../hooks/use-i18n";
import RO from "../../lib/locales/ro.json";

const useStyles = makeStyles({
  root: {
    flex: 1,
    paddingBottom: "3.5rem",
  },
  children: {
    display: "flex",
    flex: 1,
    height: "100%",
    justifyContent: "center",
  },
});

export default function MainLayout({ children }) {
  const classes = useStyles();
  const i18n = useI18n();

  useEffect(() => {
    i18n.locale("ro", RO);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container className={classes.root} direction="column">
      <Box className={classes.children}>{children}</Box>
      <MainMenu />
    </Grid>
  );
}
