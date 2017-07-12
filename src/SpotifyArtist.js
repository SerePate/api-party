import React, { Component } from 'react'
import './SpotifyArtist.css'

class SpotifyArtist extends Component{
    constructor(props){
        super(props)

        this.state = {
            artist: { }
        }

        this.fetchData(props)
    }

    fetchData = (props) => {
        fetch(`https://api.spotify.com/${props.match.params.artist}`)
            .then(response => response.json())
            .then(artist => this.setState({ artist }))
    }

    componentWillRecieveProps(nextProps){
        const locationChanged = nextProps.location !== this.props.location
        if (locationChanged) {
        this.fetchUserData(nextProps)
        }
    }
        
    
    render = () => {
        const{ artist } = this.state
        return(
            <div className="spotify-artist">
                <h2>{artist.name}</h2>
                <h3>Top Tracks: {artist.tracks}</h3>
                <h3>Albums: {artist.albums}</h3>
                <h3>Related Artists: {artist.location}</h3>
                <a href={artist.html_url} target="_">Link to {artist.login}'s profile</a>



            </div>
        )
    }
}

export default SpotifyArtist