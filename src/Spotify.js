import React, {Component} from 'react'
import { Route} from 'react-router-dom'
import './Spotify.css'
import SpotifyArtist from './SpotifyArtist'

class Spotify extends Component{
    state = {
        artist: ' '
    }

    handleChange = (ev) => {
        this.setState({ artist: ev.target.value })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/spotify/${this.state.artist}`)
        this.setState({artist: ' '})
    }

    render = () => {
        return(
            <div className="spotify">
                <img
                    className="spotify-logo"
                    src="https://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/072015/spotify_2015.png?itok=1MxXaGSs"
                    alt="spotify logo"
                />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            value={this.state.artist}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                            <button type="submit">Look up an artist on Spotify!</button>
                    </div>
                </form>
                <Route path="/spotify/:artist" component={SpotifyArtist} />
                <Route exact path = "/spotify" render={() => <h3>Please enter an artist to seach on Spotify.</h3>} />
            </div>
        )
    }
}

export default Spotify
