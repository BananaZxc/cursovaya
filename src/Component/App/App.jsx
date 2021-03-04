import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import './app.css';

import SideBar from '../SideBar/SideBar.jsx';
import MainPage from '../Page/MainPage/MainPage.jsx';
import Info from '../Page/Info/Info.jsx';

const  App = () => {
  return (
    <Router>
      <div className="app flex">
        <header className="app-header">
          <SideBar />
        </header>
        <div className="app-body">
          <Switch>
            <Route 
              path="/"
              exact
              component={MainPage}
            />
            <Route 
              path="/info"
              component={Info}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
