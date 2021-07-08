import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import MainLayout from "../components/layouts/MainLayout";
import { GlobalContextProvider } from "../lib/contexts/GlobalContext";
import { initAuth } from "../lib/firebase/firebase";
import I18n from "../lib/i18n";

import "../styles/global.css";

initAuth();

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <I18n lngDict={pageProps.lngDict} locale={pageProps.lng}>
      <GlobalContextProvider>
        <CssBaseline />

        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </GlobalContextProvider>
    </I18n>
  );
}

export default MyApp;
