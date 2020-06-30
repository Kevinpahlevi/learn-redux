import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

import EditData from "./editData";
import ShowData from "./showData";

import store from "./store-redux/store";

import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Redirect from="/" exact to="/show" />
            <Route path="/edit" component={EditData} />
            <Route path="/show" component={ShowData} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
