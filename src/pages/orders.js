import React, { Fragment, useState, forwardRef } from "react";
import { realTimeDatabase } from "../lib/firebase/firebase";
import { useList } from "react-firebase-hooks/database";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import FloatingActionButton from "../components/FloatingActionButton";
import Loading from "../components/Loading";
import { CardActionArea } from "@material-ui/core";
import { COLOR_PALETTE } from "../lib/constants";
import EditIcon from "@material-ui/icons/Edit";
import useI18n from "../hooks/use-i18n";
import NewOrder from "./order/new";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Time from "./order/[id]";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
  },
  card: { cursor: "pointer", "&:hover": { backgroundColor: "#EEE" } },
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Orders() {
  const [openOrderDetails, setOpenOrderDetails] = useState(false);
  const [openNewOrder, setOpenNewOrder] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [snapshots, loading, error] = useList(realTimeDatabase.ref("orders"));
  const i18n = useI18n();

  const classes = useStyles();
  const theme = useTheme();

  const handleClickNewOrderDetails = () => {
    setOpenNewOrder(true);
  };
  const handleClickOpenOrderDetails = () => {
    setOpenOrderDetails(true);
  };

  const handleCloseAll = () => {
    setOpenNewOrder(false);
    setOpenAlert(false);
    setOpenOrderDetails(false);
  };

  return (
    <Fragment>
      {error && <strong>Error: {error}</strong>}
      {loading && <Loading />}
      {!loading && snapshots && (
        <Fragment>
          <Dialog open={openAlert} onClose={handleCloseAll}>
            <DialogTitle id="alert-dialog-title">{"Pick?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">Are you ready to pick and deliver this order?</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseAll} color="primary">
                No
              </Button>
              <Button onClick={handleCloseAll} color="primary" autoFocus>
                Yes
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog fullScreen open={openOrderDetails} onClose={handleCloseAll} TransitionComponent={Transition}>
            <AppBar>
              <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleCloseAll} aria-label="close">
                  <CloseIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  Order: 24ud2isjjs
                </Typography>
              </Toolbar>
            </AppBar>
            <List className={classes.list}>
              <ListItem button component="a" target="_blank" rel="noopener" href="https://www.waze.com/ul?ll=47.4811281%2C18.990219&navigate=yes&zoom=17">
                <ListItemText primary="Waze" secondary="The Street 34, 12" />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="edit">
                    <EditIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem>
                <ListItemText primary="" secondary="Block 21" />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="edit">
                    <EditIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
              <ListItem button component="a" target="_blank" rel="noopener" href="tel:0033232213444">
                <ListItemText primary="Phone" secondary="0040299132" />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="edit">
                    <EditIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
              <ListItem component="div" style={{ flexDirection: "column", alignItems: "flex-start" }}>
                <ListItemText primary="Order" secondary="" />
                <Box>
                  <ul>
                    <li>Pasta</li>
                    <li>Homemade</li>
                    <li>Salad</li>
                    <li>Juice Twee 0,5l</li>
                  </ul>
                </Box>
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="edit">
                    <EditIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
              <ListItem component="div">
                <ListItemText primary="Driver information" secondary="Please ring at the door" />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="edit">
                    <EditIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />

              <ListItem component="div">
                <ListItemText primary="Price" secondary="55,00" />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="edit">
                    <EditIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
            <Button variant="contained" color="primary" className={classes.button}>
              Pick this
            </Button>
            <Button variant="contained" color="secondary" className={classes.button}>
              Delivered
            </Button>
            <Time />
          </Dialog>
          <Dialog fullScreen open={openNewOrder} scroll={"paper"} onClose={handleCloseAll} TransitionComponent={Transition}>
            <AppBar>
              <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleCloseAll} aria-label="close">
                  <CloseIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  {i18n.t("newOrder")}
                </Typography>
              </Toolbar>
              <List>
                <NewOrder />
              </List>
            </AppBar>
          </Dialog>

          <Container className={classes.root}>
            <FloatingActionButton onClick={handleClickNewOrderDetails} />
            <Grid container spacing={2}>
              {snapshots.map((v, idx) => (
                <Grid item xs={12} md={6} key={idx}>
                  <Card className={classes.card} onClick={handleClickOpenOrderDetails}>
                    <CardContent>
                      <Typography variant="h5" component="h2">
                        {v.val().id}
                      </Typography>
                      <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {v.val().address}
                      </Typography>
                      <Typography className={classes.pos} color="textSecondary"></Typography>
                      <Typography variant="body2" component="p"></Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Orders;
