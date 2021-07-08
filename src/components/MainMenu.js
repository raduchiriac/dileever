import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import { useRouter } from "next/router";
import useI18n from "../hooks/use-i18n";

const useStyles = makeStyles({
  root: { position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1000 },
});

export default function MainMenu() {
  const i18n = useI18n();
  const router = useRouter();
  const classes = useStyles();
  const [selectedMenu, setSelectedMenu] = React.useState(router.pathname.slice(1) || "");

  const handleMenuChange = (event, newValue) => {
    setSelectedMenu(newValue);
  };
  return (
    <BottomNavigation value={selectedMenu} onChange={handleMenuChange} className={classes.root}>
      <BottomNavigationAction onClick={() => router.push("/")} label={i18n.t("home")} value="" showLabel={false} icon={<HomeIcon />} />
      <BottomNavigationAction onClick={() => router.push("/map")} label={i18n.t("map")} value="map" showLabel={false} icon={<ExploreIcon />} />
      <BottomNavigationAction onClick={() => router.push("/orders")} label={i18n.t("orders")} value="orders" showLabel={false} icon={<ListAltIcon />} />
      <BottomNavigationAction onClick={() => router.push("/drivers")} label={i18n.t("drivers")} value="drivers" showLabel={false} icon={<PeopleAltIcon />} />
    </BottomNavigation>
  );
}
