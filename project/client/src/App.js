import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./pages/Login/components/Login";
import Home from "./pages/home/components/Home";
import CreatePost from "./pages/createPost/components/CreatePost";
import PrivateRoute from "./common/PrivateRoute";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute exact component={Home} path="/" />
          <PrivateRoute exact component={CreatePost} path="/create/post" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
