import React from "react";
import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "./theme/globalStyles";
import styled from "@emotion/styled";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { lightTheme, darkTheme } from "./theme/theme";

import SocialMediaCard from "./components/molecules/SocialMediaCard";

const cards = [
  {
    type: "facebook",
    username: "@nathanf",
    followersCount: 1987,
    todayFollowersCount: 12,
  },
  {
    type: "twitter",
    username: "@nathanf",
    followersCount: 1044,
    todayFollowersCount: 99,
  },
  {
    type: "instagram",
    username: "@realnathanf",
    followersCount: 11022,
    todayFollowersCount: 1099,
  },
  {
    type: "youtube",
    username: "Nathan F.",
    followersCount: 8239,
    todayFollowersCount: 144,
  },
];

const SCardRow = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
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
              <h1>Testing themes</h1>
              <SCardRow>
                {cards &&
                  cards.map((card) => (
                    <SocialMediaCard key={card.type} data={card} />
                  ))}
              </SCardRow>
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
