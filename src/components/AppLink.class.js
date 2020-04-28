import React, { Component } from "react";

class AppLink extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { href, children } = this.props;

    return (
      <a
        className="App-link"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
}

export default AppLink;
