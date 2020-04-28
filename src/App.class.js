import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.class";
import logo from "./logo.svg";

class App extends Component {
  constructor(props) {
    super(props);

    this.data = {
      appHref: "https://google.com",
      textLink: "GO!",
      descGreetings: "Yo!",
      descContent: "Ironhackers you are reacting now!",
      logoAlt: "this is the logo",
    };
  }

  render() {
    return (
      <div className="App">
        <Header logo={logo} {...this.data} />
      </div>
    );
  }
}

export default App;
