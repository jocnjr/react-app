/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class Logo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { src, alt } = this.props;

    return <img src={src} className="App-logo" alt={alt} />;
  }
}

export default Logo;
