import { createTheme } from "@material-ui/core/styles";
import { COLOR_PALETTE, BREAKPOINTS } from "../constants";

export const DarkTheme = createTheme({
  typography: {
    useNextVariants: true,
  },
  breakpoints: BREAKPOINTS,
  palette: {
    primary: {
      main: COLOR_PALETTE.white,
    },
    type: "dark",
  },
});
