import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function Drivers() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/150?img=3" />
        </ListItemAvatar>
        <ListItemText
          primary="Ali Connors"
          secondary={
            <React.Fragment>
              <Typography component="span" variant="body2" className={classes.inline} color="secondary">
                driving...
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://i.pravatar.cc/150?img=4" />
        </ListItemAvatar>
        <ListItemText
          primary="Philly Cost"
          secondary={
            <React.Fragment>
              <Typography component="span" variant="body2" className={classes.inline}>
                offline
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://i.pravatar.cc/150?img=6" />
        </ListItemAvatar>
        <ListItemText
          primary="Robert Bern"
          secondary={
            <React.Fragment>
              <Typography component="span" variant="body2" className={classes.inline} color="secondary">
                driving...
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
