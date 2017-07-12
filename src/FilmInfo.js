import React, { Component } from 'react'
import './FilmInfo.css'

class FilmInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movie: {}
    }

    this.fetchUserData(props)
  }

  fetchMovieData = (props) => {
    fetch(`https://api.themoviedb.org/3/movie/${props.match.params.username}`)
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
        <img src={movie.avatar_url} alt="github movie avatar" />
        <h2>{movie.login}</h2>
        <h3>followers: {movie.followers}</h3>
        <h3>following: {movie.following}</h3>
        <h3>location: {movie.location}</h3>
        <a href={movie.html_url} target="_">Link to {movie.login}'s profile</a>
      </div>
    )
  }
}
export default FilmInfo