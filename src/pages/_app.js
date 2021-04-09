import { useEffect } from "react";
import { GlobalContextProvider } from "../lib/contexts/GlobalContext";
import CssBaseline from "@material-ui/core/CssBaseline";
import MainLayout from "../components/layouts/MainLayout";

import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <GlobalContextProvider>
      <CssBaseline />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </GlobalContextProvider>
  );
}

export default MyApp;
