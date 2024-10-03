import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./../css/styles.css";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
