import React, { Fragment } from "react";
import { database } from "../lib/firebase";
import { useList } from "react-firebase-hooks/database";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import SpeedDials from "../components/SpeedDials";
import Backdrop from "../components/Backdrop";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "relative",
  },
  card: {
    marginTop: "1rem",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Orders() {
  const [snapshots, loading, error] = useList(database.ref("orders"));
  const classes = useStyles();

  return (
    <Fragment>
      {error && <strong>Error: {error}</strong>}
      {loading && <Backdrop />}
      {!loading && snapshots && (
        <Container className={classes.root}>
          <SpeedDials />
          {snapshots.map((v) => (
            <Card className={classes.card} key={v.key}>
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
              <CardActions></CardActions>
            </Card>
          ))}
        </Container>
      )}
    </Fragment>
  );
}

export default Orders;
