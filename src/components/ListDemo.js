import React from "react";
import Card from "./Card";

const numbers = [1, 2, 3];

// array of list item HTML elements that needs to be displayed
export const listItems = numbers.map((num, idx) => (
  <li key={idx}>
    {idx} - {num}
  </li>
));

const movies = [
  { title: "Jurassic Park", director: "Steven Spielberg" },
  { title: "Sharknado", director: "Anthony C. Ferrante" },
  { title: "Titanic", director: "James Cameron" },
  { title: "Cidade de Deus", director: "Fernando Meirelles" },
];

const MoviesList = () => (
  <ul className="list-style">
    {movies.map((oneMovie, index) => (
      <Card key={index} title={oneMovie.title} director={oneMovie.director} />
    ))}
  </ul>
);
export default MoviesList;

export const getBooks = () => ["book1", "book2"];
