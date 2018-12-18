import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import DetailsOrThanks from "./components/detailsOrThanks";
import Between from "./components/between";
import About from "./components/about";
import Footer from "./components/footer";
import Qa from "./components/qa";
import Talks from "./components/talks";
import Action from "./components/action";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Scroll from "react-scroll";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Action />
        <Between />
        <About />
        <Qa />
        <Talks />
        <Scroll.Element name="leaveDetails" />
        <DetailsOrThanks />
        <Footer />
      </div>
    );
  }
}

export default App;
