import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import store from "./store";
import Home from "./components/Home";
import ListDetails from "./components/ListDetails";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/details/:id" component={ListDetails} />
      </Router>
    </Provider>
  );
}

export default App;
