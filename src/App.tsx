import React from "react";
import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "./theme/globalStyles";
import styled from "@emotion/styled";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { lightTheme, darkTheme } from "./theme/theme";

import SocialMediaCard from "./components/molecules/SocialMediaCard";
import TodayOverviewCard from "./components/molecules/TodayOverviewCard";

import { cardsData, todayOverViewCardsData } from "./mocks/data";

import { breakpoints } from "./theme/variables";

const S: any = {};
S.CardRow = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

S.DashBoardHeader = styled.section<any>`
  padding: 3.6rem 0;

  /* Desktop approach */
  display: flex;
  justify-content: space-between;

  @media (max-width: ${breakpoints.mobileSmall}) {
    flex-direction: column;
    padding: 3.6rem 2.5rem;
  }

  .heading {
    &__title {
      font-size: 2.8rem;
      line-height: 3.4rem;
      color: ${(props) => props.theme.colors.fontSecondary};

      @media (max-width: ${breakpoints.mobileSmall}) {
        font-size: 2.4rem;
        line-height: 2.9rem;
      }
    }
    &__subtitle {
      font-size: 1.4rem;
      line-height: 1.7rem;
      color: ${(props) => props.theme.colors.fontPrimary};
    }
  }
  .separator {
    visibility: hidden;
    display: none;

    width: 100%;
    height: 0.1rem;
    background-color: ${(props) => props.theme.colors.separatorColor};
    margin-top: 2.4rem;
    margin-bottom: 1.6rem;

    @media (max-width: ${breakpoints.mobileSmall}) {
      visibility: visible;
      display: block;
    }
  }
  .toggle {
    @media (max-width: ${breakpoints.mobileSmall}) {
      display: flex;
      justify-content: space-between;
    }

    &__label {
      color: ${(props) => props.theme.colors.fontPrimary};
      font-size: 1.4rem;
      line-height: 1.7rem;
      font-weight: bold;
    }
  }
`;

function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const [totalFollowers, setTotalFollowers] = React.useState(0);

  React.useEffect(() => {
    const totalCount = cardsData.reduce((acc, data) => {
      acc += data.followersCount;
      return acc;
    }, 0);
    setTotalFollowers(totalCount);
    // (new Intl.NumberFormat().format(number));
  }, []);

  /**
   * Transforms a number into a String with the format of the default locale.
   * More info at MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
   *
   * @param number number - The number to be formatted
   * @returns string - The number in string format for the default locale.
   */
  const numberToString = (number: number): string =>
    new Intl.NumberFormat().format(number);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Router>
        <GlobalStyles />

        <Switch>
          <Route exact path="/">
            <div>
              <S.DashBoardHeader>
                <div className="heading">
                  <h1 className="heading__title">Social Media Dashboard</h1>
                  <h3 className="heading__subtitle">
                    Total Followers: {numberToString(totalFollowers)}
                  </h3>
                </div>
                <div className="separator"></div>
                <div className="toggle">
                  <span className="toggle__label">Dark Mode</span>
                  <button
                    className="toggle__btn"
                    onClick={() => setIsDarkTheme(!isDarkTheme)}
                  >
                    Toggle
                  </button>
                </div>
              </S.DashBoardHeader>
              <S.CardRow>
                {cardsData &&
                  cardsData.map((card) => (
                    <SocialMediaCard key={card.platform} data={card} />
                  ))}
              </S.CardRow>
              <h2>Overview - Today</h2>
              <div>
                {todayOverViewCardsData &&
                  todayOverViewCardsData.map((card) => (
                    <TodayOverviewCard key={card.id} data={card} />
                  ))}
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
