import { createMuiTheme } from "@material-ui/core/styles";
import { COLOR_PALETTE } from "../constants";

export const DarkTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: "#F3F3F3",
    },
    type: "dark",
  },
  custom_palette: COLOR_PALETTE,
});
