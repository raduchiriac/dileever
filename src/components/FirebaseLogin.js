import React, { useEffect } from "react";
import { Box, Button } from "@material-ui/core";

import { useAuthUser, withAuthUser, withAuthUserTokenSSR } from "next-firebase-auth";

const FirebaseLogin = () => {
  const AuthUser = useAuthUser();

  return (
    <Box>
      <p>Your email is {AuthUser.email ? AuthUser.email : "unknown"}.</p>
    </Box>
  );
};

export default withAuthUser()(FirebaseLogin);
