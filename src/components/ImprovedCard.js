import React from "react";

const ImprovedCard = ({ title, director, deleteHandler }) => {
  return (
    <div className="movies-list-item">
      <h2>{title}</h2>
      <p>Director: {director}</p>
      <button onClick={deleteHandler}>delete movie</button>
    </div>
  );
};

export default ImprovedCard;
