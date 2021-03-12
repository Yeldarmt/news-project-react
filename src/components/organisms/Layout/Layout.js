import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "../../molecules/Header/Header";
import Main from "../../../pages/main";
import News from "../../../pages/news";
import AddNews from "../../../pages/add-news";

function Layout() {
  return (
    <div>
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route exact path="/news">
            <News/>
          </Route>
          <Route exact path="/add-news">
            <AddNews/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Layout;
