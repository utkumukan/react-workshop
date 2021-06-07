import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { createContext, useMemo, useState } from "react";

export const ThemeContext = createContext();

const AppThemeProvider = (props) => {
  const { children } = props;

  let themeStorage = localStorage.getItem("theme") || "light";

  const [themeState, setThemeState] = useState(themeStorage);

  const setTheme = (themeStatus) => {
    setThemeState(themeStatus);
    localStorage.setItem("theme", themeStatus);
    themeStorage = themeStatus;
  };

  const muiTheme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: themeState,
          common: {
            waikaGrey: "#606e88",
            clearBlue: "#1d78e2",
            coralPink: "#ff556a",
            peaGreen: "#70bb15",
            darkGreen: "#009933",
            red: "#f44336",
            darkRed: "#cc0000",
            dusk: "#475571",
            steel: "#6d7a95",
            blueGrey: "#8790a2",
            lightBlueGrey: "#bfc8da",
            paleGrey: themeState === "dark" ? "#303030" : "#eff1f4",
            lightPeriwinkle: themeState === "dark" ? "#84878f" : "#dce0e6",
            pureWhite: themeState === "dark" ? "#000" : "#fff",
            lightCyanBluishGray: "#b9c2d4",
            black: themeState === "dark" ? "#fff" : "#000",
            lightGrayishBlue: "#e0e6f2",
            darkGreyBlue: themeState === "dark" ? "#fff" : "#31405c",
            lightGray: themeState === "dark" ? "#575757" : "#c9c9c9"
          },
          primary: { main: "#f5a623" }, // orange-yellow
          secondary: { main: "#31405c" }, // dark-grey-blue
          text: {
            primary: themeState === "dark" ? "#fff" : "#31405c",
            dusk: themeState === "dark" ? "#fff" : "#475571", // dark-grey-blue
            steel: themeState === "dark" ? "#fff" : "#6d7a95",
            blueGrey: themeState === "dark" ? "#fff" : "#8790a2",
            waikaGrey: themeState === "dark" ? "#fff" : "#606e88",
            lightBlueGrey: themeState === "dark" ? "#fff" : "#bfc8da"
          },
          background: {
            default: themeState === "dark" ? "#303030" : "#f5f5f5"
          }
        }
      }),
    [themeState]
  );

  return (
    <ThemeContext.Provider value={setTheme}>
      <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

AppThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.bool
};

export default AppThemeProvider;
