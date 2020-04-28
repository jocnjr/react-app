import React, { Component } from "react";

class Description extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { greetings, children } = this.props;

    return (
      <p>
        {greetings}, {children}
      </p>
    );
  }
}

export default Description;
