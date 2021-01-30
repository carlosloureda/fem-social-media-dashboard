import React from "react";
import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "./theme/globalStyles";
import styled from "@emotion/styled";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { lightTheme, darkTheme } from "./theme/theme";

const H1 = styled.h1`
  color: ${(props: any) => props.theme.colors.fontPrimary};
`;

const Card = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${(props: any) => props.theme.colors.bgPrimary};
  color: ${(props: any) => props.theme.colors.fontPrimary};
`;

function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Router>
        <GlobalStyles />

        <Switch>
          <Route exact path="/">
            <div>
              <H1>Testing themes</H1>
              <Card>This is a box</Card>
              <button onClick={() => setIsDarkTheme(!isDarkTheme)}>
                Toggle Theme
              </button>
            </div>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
