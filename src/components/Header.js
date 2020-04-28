import React from "react";
// import Logo from "./Logo";
import Logo from "./Logo";
import Description from "./Description";
import AppLink from "./AppLink";
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
      <Description greetings={descGreetings}>{descContent}</Description>
      <AppLink href={appHref}>{textLink}</AppLink>
    </header>
  );
};

// Header.propTypes = {
//   logo: PropTypes.string,
//   data: PropTypes.object,
// };

export default Header;
