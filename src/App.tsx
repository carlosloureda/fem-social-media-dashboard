import React from "react";
import { Global } from "@emotion/react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Example from "./components/pages/Example";
import GlobalStyles from "./theme/globalStyles";
import Input from "./components/atoms/Input";

function App() {
  return (
    <Router>
      <Global styles={GlobalStyles} />
      <Switch>
        <Route exact path="/">
          <Example />
          <Input
            type="email"
            placeholder="Email Address"
            required
            id="email"
            name="email"
            autoComplete="email"
            value={"aaa@aaa.com"}
            onChange={() => console.log("on change done!")}
          ></Input>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
