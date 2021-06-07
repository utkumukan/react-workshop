import { StrictMode } from "react";
import ReactDOM from "react-dom";
import AppThemeProvider from "./components/AppThemeProvider/index";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </StrictMode>,
  rootElement
);
