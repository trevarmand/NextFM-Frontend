import React from 'react';

export default class TopArtistList extends React.Component {


  constructor(props) {
    super()
    this.state = {
      artistlist:  this.fetchTopArtistList()
    }
  }

  render() {
    return (
      <div className="top-artist-list yellow-text">
        <h1>Top Artist List for {this.props.name}</h1>
          {this.state.artistlist.map((entry) => <li className = "top-artist-list-entry">{entry}</li>)}
      </div>
    )
  }

  // Executes an API request & formats reponse as a list
  fetchTopArtistList() {
    // TODO create backend endpoint for this metric
    return ["Me and Your Mama - Childish Gambino", "Turn the Page - Bob Seger"]
  }
}