import React from "react";
import ThemeSwitcher from "../components/ThemeSwitcher";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import dynamic from "next/dynamic";
import FirebaseLogin from "../components/FirebaseLogin.js";
import { useAuthUser, withAuthUser, withAuthUserTokenSSR } from "next-firebase-auth";
import Header from "../components/Header";
import DemoPageLinks from "../components/DemoPageLinks";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
  },
  logo: {
    userSelect: "none",
  },
  bullet: {
    fontSize: "5rem",
    opacity: 0.33,
    transform: "translateY(0.5rem)",
  },
}));

const Index = () => {
  const classes = useStyles();
  const AuthUser = useAuthUser();

  const bullet = (
    <Typography variant="h4" className={classes.bullet}>
      •
    </Typography>
  );

  return (
    <Box className={classes.root} component="div" display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100%">
      <ThemeSwitcher />
      <Box display="flex" flexDirection="row" alignItems="center" className={classes.logo}>
        <Typography variant="h2">di</Typography>
        {bullet}
        <Typography variant="h2">lee</Typography>
        {bullet}
        <Typography variant="h2">ver</Typography>
      </Box>
      <Header email={AuthUser.email} signOut={AuthUser.signOut} />
      <div>
        <div>
          <h3>Home</h3>
          <p>This page does not require authentication, so it won't redirect to the login page if you are not signed in.</p>
          <p>If you remove `getServerSideProps` from this page, it will be static and load the authed user only on the client side.</p>
        </div>
        <DemoPageLinks />
      </div>
    </Box>
  );
};

export const getServerSideProps = withAuthUserTokenSSR()();
// export const getServerSideProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ["common"])),
//   },
// });

export default withAuthUser()(Index);
