import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.class";
import logo from "./logo.svg";

const App = () => {
  console.log(logo);

  const data = {
    appHref: "https://google.com",
    textLink: "GO!",
    descGreetings: "Yo!",
    descContent: "Ironhackers you are reacting now!",
    logoAlt: "this is the logo",
  };

  return (
    <div className="App">
      <Header logo={logo} {...data} />
    </div>
  );
};

export default App;
