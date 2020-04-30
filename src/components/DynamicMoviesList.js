import React, { Component } from "react";
import ImprovedCard from "./ImprovedCard";

class DynamicMoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        { title: "The Godfather", director: "Francis Coppola" },
        { title: "Star Wars", director: "Rian Johnson" },
        { title: "The Shawshank Redemption", director: "Frank Darabont" },
        { title: "Cidade de Deus", director: "Fernando Meirelles" },
      ],
    };

    this.deleteHandler = this.deleteHandler.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  deleteHandler(idx) {
    console.log("inside delete", idx);
    // copy array from state
    const newMovies = [...this.state.movies];
    // shift
    newMovies.splice(idx, 1);
    // setState
    this.setState({
      movies: newMovies,
    });
  }

  addMovie() {
    const { movies } = this.state;

    const jocMovie = {
      title: "ET the extra-terrestrial",
      director: "Steven Spilberg",
    };
    const newMovies = [...movies];
    newMovies.unshift(jocMovie);

    this.setState({
      movies: newMovies,
    });
  }

  render() {
    // leave this console.log() so we can keep track of our state inside our browser's console
    console.log(this.state.movies);
    return (
      <div>
        <button onClick={this.addMovie}>Add GREATEST movie EVER!</button>
        <br />
        {this.state.movies.map((oneMovie, index) => (
          <ImprovedCard
            key={index}
            deleteHandler={() => this.deleteHandler(index)}
            {...oneMovie}
          />
        ))}
      </div>
    );
  }
}

export default DynamicMoviesList;
