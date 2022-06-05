import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import store from "./store";
import Home from "./components/Home";
import ListDetails from "./components/ListDetails";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
     <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details/:id" element={<ListDetails />}></Route>
      </Routes>
      </Router>
    </Provider>
  );
}

export default App;
