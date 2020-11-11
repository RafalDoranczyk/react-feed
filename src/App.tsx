import React from "react";
import Navigation from "components/Navigation";
import AppRouter from "pages/router";

export interface AppProps {
  handleDarkMode: () => void;
  darkMode: boolean;
}

const App: React.FunctionComponent<AppProps> = ({
  handleDarkMode,
  darkMode,
}) => (
  <>
    <Navigation darkMode={darkMode} handleDarkMode={handleDarkMode} />
    <AppRouter />
  </>
);

export default App;
