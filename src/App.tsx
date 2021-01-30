import React from "react";
import { Global, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { lightTheme, darkTheme } from "./theme/theme";

const H1 = styled.h1`
  color: ${(props: any) => props.theme.colors.primary};
`;
function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Router>
        {/* <Global styles={GlobalStyles} /> */}

        <Switch>
          <Route exact path="/">
            <div>
              <H1>Testing themes</H1>
              <button
                onClick={() => {
                  // if (theme === lightTheme)
                  setIsDarkTheme(!isDarkTheme);
                }}
              >
                Toggle Theme
              </button>
              <a href="/">This is a link!</a>
            </div>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
