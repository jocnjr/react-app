import React from "react";

const ImprovedCard = (props) => {
  return (
    <div className="movies-list-item">
      <h2>{props.title}</h2>
      <p>Director: {props.director}</p>
      <button onClick={props.deleteHandler}>delete movie</button>
    </div>
  );
};

export default ImprovedCard;
