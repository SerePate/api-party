import React, { Component } from 'react'
import './Films.css'
import { Route } from 'react-router-dom'
import FilmInfo from './FilmInfo'

class Films extends Component {
  state = {
    movie : ''
  }

  handleChange = (ev) => {
    this.setState({ movie: ev.target.value })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/films/${this.state.movie}`)
    this.setState({ movie: '' })
  }

  render() {
    return (
      <div className="film">
        <img 
          className="film-logo" 
          src="https://www.themoviedb.org/assets/static_cache/afc8955ea7e6aabcf0c9d8254346b928/images/v4/logos/312x276-primary-blue.png"
          alt="film logo"
        />
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              value={this.state.movie}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Look up a film!</button>
          </div>
        </form>
        <Route path="/films/:movie" component={FilmInfo} />
        <Route exact path="/films" render={() => <h3>Please enter a movie to search on the movie directory.</h3>} />
      </div>
    )
  }
}

export default Films