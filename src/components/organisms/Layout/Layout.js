import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from "../../molecules/Header/Header";
import MainRouting from "../../../routers";

function Layout() {
  return (
    <div>
      <Header/>
      <Router>
        <MainRouting/>
      </Router>
    </div>
  );
}

export default Layout;
