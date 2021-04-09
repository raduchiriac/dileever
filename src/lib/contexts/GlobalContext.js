import React, { useReducer, createContext } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { LightTheme } from "../themes/light-theme";
import { DarkTheme } from "../themes/dark-theme";
import { Helmet } from "react-helmet";
import { SITE_NAME, COLOR_PALETTE } from "../constants";

const GlobalContext = createContext();

let initialState = {
  THEME: "light",
  // USER_LANG: "ro",
  // STRINGS: i18n["ro"],
  // showMap: true,
  // drawerWidth: 220,
  // isiOS: process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent),
  // LANGUAGES_LABEL: Object.keys(i18n).map((l) => ({ code: l, text: i18n[l].LANG_LABEL })),
};

let reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "set-theme":
      return { ...state, THEME: action.payload };
    default:
      return state;
  }
};

function GlobalContextProvider({ children }) {
  let [state, dispatchGlobally] = useReducer(reducer, initialState);
  let value = { state, dispatchGlobally };

  return (
    <GlobalContext.Provider value={value}>
      <ThemeProvider theme={(state.THEME == "dark" && DarkTheme) || LightTheme}>
        <Helmet
          htmlAttributes={{ lang: process.env.NEXT_PUBLIC_LANG }}
          defaultTitle={SITE_NAME}
          titleTemplate={`%s | ${SITE_NAME}`}
          meta={[
            {
              name: "viewport",
              content: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no",
            },
            { name: "description", content: "" },
            { name: "theme-color", content: COLOR_PALETTE.primary },
            { name: "msapplication-navbutton-color", content: COLOR_PALETTE.primary },
            { name: "apple-mobile-web-app-status-bar-style", content: COLOR_PALETTE.primary },
          ]}
        />
        {children}
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

const GlobalContextConsumer = GlobalContext.Consumer;
export { GlobalContext, GlobalContextProvider, GlobalContextConsumer };
