import React from "react";
import ReactDOM from "react-dom";

import Footer from "mf1/Footer";
import Header from "mf1/Header";

import "./index.css";

const App = () => (
  <div className="container">
    <Header />
    <div>Name: mf2</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
