import { createMuiTheme } from "@material-ui/core/styles";
import { COLOR_PALETTE } from "../constants";

export const LightTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
    button: {
      textTransform: "none",
    },
  },
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
