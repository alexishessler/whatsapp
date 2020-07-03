// REACT & MODULES
import React from 'react';
import { ENV } from "../../../config.env";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
// COMPONENTS
import theme from '../theme/NormalTheme';
import Login from "./Login";
import Main from "./Main";

const App = (props:any):JSX.Element => {
  return(
    <ThemeProvider theme={theme} config={ENV}>
      <Router>
        <Switch>
          <Route path="/" component={Login} exact/>
          <Route path="/chats" component={Main} exact/>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App;
