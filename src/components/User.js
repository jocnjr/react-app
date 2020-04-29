import React from "react";

const User = (props) => {
  return (
    <div>
      <h2 style={{ backgroundColor: props.theColor }}>
        Hello, {props.firstName}, {props.lastName}!!
      </h2>
      <img src={props.image} width="370" height="300" alt={props.firstName} />
    </div>
  );
};

export default User;
