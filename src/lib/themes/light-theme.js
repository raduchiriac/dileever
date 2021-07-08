import { createTheme } from "@material-ui/core/styles";
import { COLOR_PALETTE, BREAKPOINTS } from "../constants";

export const LightTheme = createTheme({
  typography: {
    useNextVariants: true,
  },
  breakpoints: BREAKPOINTS,
  // https://material-ui.com/customization/palette/
  palette: {
    primary: {
      main: COLOR_PALETTE.primary,
    },
    error: {
      main: COLOR_PALETTE.error,
    },
    secondary: {
      main: COLOR_PALETTE.secondary,
    },
    type: "light",
  },
});
