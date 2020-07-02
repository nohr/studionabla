import React from "react";
import "./App.css";
import "./components/scroll.js";
import Nabla from "./components/Nabla";
import Slider from "./components/Slider";
import Feed from "./components/Feed";
import Main from "./components/Main";
import Footer from "./components/footer";

function App() {
  return (
    <div className="bigContainer">
      <div className="container">
        <Nabla />
        <Slider />
        <Main />
        <Feed />
      </div>
      <Footer />
    </div>
  );
}

export default App;
