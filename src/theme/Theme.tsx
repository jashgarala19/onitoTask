import { createTheme } from "@mui/material";
import Palette from "./palette/Palette";
import Typography from "./typography/Typography";

const Theme = createTheme({
  palette: {
    ...Palette,
  },
  typography: {
    ...Typography,
  },
});

export default Theme;
