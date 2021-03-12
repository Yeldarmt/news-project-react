import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Main from "../pages/main";
import News from "../pages/news";
import AddNews from "../pages/add-news";


function MainRouting() {

  return (
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
  );
}

export default MainRouting;
