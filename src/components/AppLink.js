import React from "react";

const AppLink = ({ href, children }) => {
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
};

export default AppLink;
