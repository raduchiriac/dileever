import React from "react";
import Alerts from "../components/Alerts";
import Toggle from "../components/Toggle";
import Loading from "../components/Loading";
import Tables from "../components/Tables";
import FullScreenDialog from "../components/Dialogs";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";

export default function Demo() {
  return (
    <div>
      <Toggle />
      <Alerts />
      <Loading />
      <Tables />
      <FullScreenDialog />
      <Chip color="primary" label="Bob i Bobby" onDelete={() => {}} icon={<FaceIcon />} />
    </div>
  );
}
