import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { ReactNode } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#043D6A",
    },
    secondary: {
      main: "#C6EAFC",
    },
    error: {
      main: "#fb2d1d",
    },
    success: {
      main: "#26C013 ",
    },
    background: {
      paper: "#ffffff",
      default: "#fafafa",
    },
    text: {
      primary: "#000000 ",
    },
    info: {
      main: "#2196f3",
    }    
  },
});

export function Theme({ children }: { children: ReactNode }) {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}
