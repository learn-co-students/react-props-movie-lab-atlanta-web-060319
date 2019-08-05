import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct 
    let allMovies = movieData.map((movie, index) => {
      return <MovieCard key={index} {...movie} />
    })
    return allMovies
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
