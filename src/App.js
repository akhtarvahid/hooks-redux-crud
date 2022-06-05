import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import store from "./store";
import Home from "./components/Home";
import ListDetail from "./components/ListDetail";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
     <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail/:id" element={<ListDetail />}></Route>
      </Routes>
      </Router>
    </Provider>
  );
}

export default App;
