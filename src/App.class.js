import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import User from "./components/User";
import logo from "./logo.svg";

// import { listItems, MoviesList } from "./components/ListDemo";
import ListDemo from "./components/ListDemo";

import DynamicMoviesList from "./components/DynamicMoviesList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        appHref: "https://google.com",
        textLink: "GO!",
        descGreetings: "Yo!",
        descContent: "Ironhackers you are reacting now!",
        logoAlt: "this is the logo",
      },
      clickCount: 0,
      backColor: "yellow",
      userA: {
        firstName: "Harper",
        lastName: "Perez",
        avatarUrl:
          "https://www.refreshmiami.com/wp-content/uploads/2018/07/55085_logo-ironhack.png",
      },
      userB: {
        firstName: "Ana",
        lastName: "Hello",
        avatarUrl:
          "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png",
      },
    };

    // binding the proper this (App class) to the method
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    const { clickCount, userA, userB } = this.state;

    const newCount = clickCount + 1;

    newCount === 5
      ? this.setState({ backColor: "lightgray", clickCount: newCount })
      : newCount === 10
      ? this.setState({
          userA: {
            ...userA,
            avatarUrl:
              "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png",
          },
          userB: {
            ...userB,
            avatarUrl:
              "https://www.refreshmiami.com/wp-content/uploads/2018/07/55085_logo-ironhack.png",
          },
          clickCount: newCount,
        })
      : this.setState({
          clickCount: newCount,
        });

    console.log(this.state.clickCount);
  }

  render() {
    console.log("render called!");
    return (
      <div className="App">
        <DynamicMoviesList />
        {/* <MoviesList /> */}
        <hr />
        {ListDemo.MoviesList}
        <div
          style={{
            backgroundColor: "#FFF",
            height: "100px",
            padding: "10px 0",
          }}
        >
          <p>{this.state.clickCount}</p>
          <button onClick={this.clickHandler}>Click Me!</button>
        </div>
        <User
          theColor={this.state.backColor}
          firstName={this.state.userA.firstName}
          lastName={this.state.userA.lastName}
          image={this.state.userA.avatarUrl}
        />
        <User
          theColor={this.state.backColor}
          firstName={this.state.userB.firstName}
          lastName={this.state.userB.lastName}
          image={this.state.userB.avatarUrl}
        />
        <Header logo={logo} {...this.state.data} />
      </div>
    );
  }
}

export default App;
