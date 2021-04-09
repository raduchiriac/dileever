import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ContactsIcon from "@material-ui/icons/Contacts";
import { useRouter } from "next/router";

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

export default function MainMenu() {
  const router = useRouter();
  const [selectedMenu, setSelectedMenu] = React.useState(router.pathname.slice(1) || "");

  const handleMenuChange = (event, newValue) => {
    setSelectedMenu(newValue);
  };
  return (
    <BottomNavigation value={selectedMenu} onChange={handleMenuChange}>
      <BottomNavigationAction onClick={() => router.push("/")} label="Home" value="" showLabel={false} icon={<HomeIcon />} />
      <BottomNavigationAction onClick={() => router.push("/map")} label="Map" value="map" showLabel={false} icon={<ExploreIcon />} />
      <BottomNavigationAction onClick={() => router.push("/orders")} label="Orders" value="orders" showLabel={false} icon={<ListAltIcon />} />
      <BottomNavigationAction onClick={() => router.push("/drivers")} label="Drivers" value="drivers" showLabel={false} icon={<ContactsIcon />} />
    </BottomNavigation>
  );
}
