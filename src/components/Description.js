import React from "react";

const Description = ({ greetings, children }) => {
  return (
    <p>
      {greetings}, {children}
    </p>
  );
};

export default Description;
