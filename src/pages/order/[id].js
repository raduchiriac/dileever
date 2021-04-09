import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";
import HotelIcon from "@material-ui/icons/Hotel";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import RepeatIcon from "@material-ui/icons/Repeat";
import Paper from "@material-ui/core/Paper";
import PanToolIcon from "@material-ui/icons/PanTool";
import RoomServiceIcon from "@material-ui/icons/RoomService";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import DoneIcon from "@material-ui/icons/Done";
import PhoneCallbackIcon from "@material-ui/icons/PhoneCallback";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px 16px",
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-end",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function Order() {
  const classes = useStyles();

  return (
    <Timeline align="left">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            9:30 am
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <PhoneCallbackIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box>
            <Typography variant="h6" component="h1">
              Ordered
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            10:00 am
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box>
            <Typography variant="h6" component="h1">
              Prepared
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <DriveEtaIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Box>
            <Typography variant="h6" component="h1">
              Picked
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <DoneIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Box>
            <Typography variant="h6" component="h1">
              Delivered
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
