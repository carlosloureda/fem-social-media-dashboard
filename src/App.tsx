import React from "react";
import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "./theme/globalStyles";
import styled from "@emotion/styled";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { lightTheme, darkTheme } from "./theme/theme";

import SocialMediaCard from "./components/molecules/SocialMediaCard";
import TodayOverviewCard from "./components/molecules/TodayOverviewCard";

import { cardsData, todayOverViewCardsData } from "./mocks/data";

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
                {cardsData &&
                  cardsData.map((card) => (
                    <SocialMediaCard key={card.platform} data={card} />
                  ))}
              </SCardRow>
              <div>
                {todayOverViewCardsData &&
                  todayOverViewCardsData.map((card) => (
                    <TodayOverviewCard key={card.id} data={card} />
                  ))}
              </div>
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
