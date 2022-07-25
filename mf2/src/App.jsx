import React,{Suspense} from "react";
import ReactDOM from "react-dom";

import Footer from "mf1/Footer";
const Header = React.lazy(()=> import("mf1/Header"));

import "./index.css";

const App = () => (
  <div className="container">
    <Suspense fallback={<div>Loading</div>} >
      <Header />
    </Suspense>
    <div>Name: mf2</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
