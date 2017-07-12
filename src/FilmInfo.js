import React, { Component } from 'react'
import './FilmInfo.css'

class FilmInfo extends Component {
    state = {
      movie: {}
    }

    componentWillMount = () => {
    this.fetchMovieData(this.props)
    }

  fetchMovieData = (props) => {
    fetch(`https://api.themoviedb.org/3/find/${props.match.params.movie}`)
      .then(response => response.json())
      .then(movie => this.setState({ movie }))
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = nextProps.location !== this.props.location
    if (locationChanged) {
      this.fetchMovieData(nextProps)
    }
  }

  render() {
    const { movie } = this.state
    return (
      <div className="film-movie">
        <img src={movie.movie_result} alt="movie poster" />
        <h2>{movie.title}</h2>
        <h3>Overview: {movie.overview}</h3>
        <h3>Popularity: {movie.popularity}</h3>
        <h3>Release Date: {movie.release_date}</h3>
      </div>
    )
  }
}
export default FilmInfo