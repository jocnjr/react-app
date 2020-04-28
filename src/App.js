import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import logo from "./logo.svg";
import ReactPlayer from "react-player";

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
      <ReactPlayer
        url="https://www.youtube.com/watch?v=rSYwtllbweY&list=RDrSYwtllbweY&start_radio=1"
        playing
      />
      <ReactPlayer
        url="https://www.youtube.com/watch?v=_1c1zhV3vHk&list=RD_1c1zhV3vHk&start_radio=1"
        controls
        loop
      />
      <ReactPlayer url="https://vimeo.com/224360876" controls />
    </div>
  );
};

export default App;
