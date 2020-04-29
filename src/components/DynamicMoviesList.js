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
  }

  deleteHandler() {
    console.log("inside delete");
    // copy array from state
    const newMovies = [...this.state.movies];
    // shift
    newMovies.shift();
    // setState
    this.setState({
      movies: newMovies,
    });
  }

  render() {
    // leave this console.log() so we can keep track of our state inside our browser's console
    console.log(this.state.movies);
    return (
      <div>
        <br />
        {this.state.movies.map((oneMovie, index) => (
          <ImprovedCard
            key={index}
            deleteHandler={this.deleteHandler}
            {...oneMovie}
          />
        ))}
      </div>
    );
  }
}

export default DynamicMoviesList;
