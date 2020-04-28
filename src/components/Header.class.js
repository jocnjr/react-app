import React, { Component } from "react";
// import Logo from "./Logo";
import Logo from "./Logo.class";
import Description from "./Description.class";
import AppLink from "./AppLink";
// import PropTypes from "prop-types";

class Header extends Component {
  render() {
    const {
      logo,
      appHref,
      textLink,
      descGreetings,
      descContent,
      logoAlt,
    } = this.props;

    return (
      <header className="App-header">
        <Logo src={logo} alt={logoAlt} />
        <Logo src={logo} alt={logoAlt} />
        <Logo src={logo} alt={logoAlt} />
        <Logo src={logo} alt={logoAlt} />
        <Logo src={logo} alt={logoAlt} />
        <Description greetings={descGreetings}>{descContent}</Description>
        <Description greetings={descGreetings}>{descContent}</Description>
        <Description greetings={descGreetings}>{descContent}</Description>
        <AppLink href={appHref}>{textLink}</AppLink>
        <AppLink href={appHref}>{textLink}</AppLink>
        <AppLink href={appHref}>{textLink}</AppLink>
      </header>
    );
  }
}

// Header.propTypes = {
//   logo: PropTypes.string,
//   data: PropTypes.object,
// };

export default Header;
