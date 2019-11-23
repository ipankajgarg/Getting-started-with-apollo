import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login/components/Login";
import Home from "./pages/home/components/Home";
import CreatePost from "./pages/createPost/components/CreatePost";
import PrivateRoute from "./common/PrivateRoute";
import Header from "./common/Header";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <Router>
        <Header />
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
