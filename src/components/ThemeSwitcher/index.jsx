import { IconButton } from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { makeStyles } from "@material-ui/styles";
import React, { useContext, useState } from "react";

import { ThemeContext } from "../AppThemeProvider";
import Wrapper from "./Wrapper";

const styles = (theme) => {
  return {
    icon: {
      color: "#606e88"
    }
  };
};

const DarkLightSwitcher = () => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  let themeStorage = localStorage.getItem("theme") || "light";
  const [themeState, setThemeState] = useState(themeStorage);

  const setTheme = useContext(ThemeContext);

  const onThemeChange = () => {
    if (themeState === "dark") {
      setThemeState("light");
      setTheme("light");
    } else {
      setThemeState("dark");
      setTheme("dark");
    }
  };

  return (
    <Wrapper>
      {themeState === "dark" ? (
        <IconButton
          id="dark-button"
          className={classes.icon}
          onClick={onThemeChange}
        >
          <Brightness7Icon fontSize="large" />
        </IconButton>
      ) : (
        <IconButton
          id="light-button"
          className={classes.icon}
          onClick={onThemeChange}
        >
          <Brightness4Icon fontSize="large" />
        </IconButton>
      )}
    </Wrapper>
  );
};

export default DarkLightSwitcher;
