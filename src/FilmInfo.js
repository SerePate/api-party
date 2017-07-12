import React, { Component } from 'react'
import './FilmInfo.css'

class FilmInfo extends Component {
    state = {
      movie: {}
    }

    componentWillMount = () => {
    this.fetchMovieData(this.props)
}
    componentWillReceiveProps(nextProps) {
    const locationChanged = nextProps.location !== this.props.location
    if (locationChanged) {
      this.fetchMovieData(nextProps)
    }
  }

    fetchMovieData = (props) => {
        fetch(`https://api.themoviedb.org/3/movie/${props.match.params.movie}?api_key=864049850253cfd16b1d2c5b85fc9095&language=en-US`)
            .then(response => response.json())
            .then(movie => this.setState({ movie }))
  }



  render() {
    const { movie } = this.state
    return (
      <div className="film-movie">
        <img src={movie.movie_result} alt="movie poster" />
        <h2>You searched: {movie.title}</h2>
        <h3>Overview: {movie.overview}</h3>
        <h3>Popularity: {movie.popularity}</h3>
        <h3>Release Date: {movie.release_date}</h3>
      </div>
    )
  }
}
export default FilmInfo