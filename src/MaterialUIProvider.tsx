import React, { useMemo, useState } from "react";
import { blue } from "@material-ui/core/colors";
import {
  MuiThemeProvider,
  CssBaseline,
  createMuiTheme,
  Container,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import App from "App";

export const TOP_NAV_HEIGHT = 50;

const useStyles = makeStyles(() =>
  createStyles({
    appWrapper: {
      marginTop: `${TOP_NAV_HEIGHT + 20}px`,
    },
  })
);

const MaterialUIProvider: React.FunctionComponent = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: {
            light: "#b14949",
            main: "#9e1c1c",
            dark: "#6e1313",
          },
          secondary: blue,
          type: darkMode ? "dark" : "light",
        },
        overrides: {
          MuiCssBaseline: {
            "@global": {
              body: {
                "&::-webkit-scrollbar": {
                  height: "8px",
                  width: "8px",
                },
                "&::-webkit-scrollbar-thumb ": {
                  background: "#9e1c1c",
                  border: `0px none #9e1c1c`,
                  borderRadius: "50px",
                },
              },
            },
          },
        },
      }),
    [darkMode]
  );

  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <Container className={classes.appWrapper}>
        <CssBaseline />
        <App darkMode={darkMode} handleDarkMode={handleDarkMode} />
      </Container>
    </MuiThemeProvider>
  );
};

export default MaterialUIProvider;
