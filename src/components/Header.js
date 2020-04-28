import React from "react";
// import Logo from "./Logo";
import Logo from "./Logo.class";
import Description from "./Description.class";
import AppLink from "./AppLink.class";
// import PropTypes from "prop-types";

const Header = ({
  logo,
  appHref,
  textLink,
  descGreetings,
  descContent,
  logoAlt,
}) => {
  return (
    <header className="App-header">
      <Logo src={logo} alt={logoAlt} />
      <Logo src={logo} alt={logoAlt} />
      <Logo src={logo} alt={logoAlt} />
      <Logo src={logo} alt={logoAlt} />
      <Description greetings={descGreetings}>{descContent}</Description>
      <Description greetings={descGreetings}>{descContent}</Description>
      <Description greetings={descGreetings}>{descContent}</Description>
      <AppLink href={appHref}>{textLink}</AppLink>
      <AppLink href={appHref}>{textLink}</AppLink>
    </header>
  );
};

// Header.propTypes = {
//   logo: PropTypes.string,
//   data: PropTypes.object,
// };

export default Header;
