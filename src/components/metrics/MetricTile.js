import React from 'react';
import TopArtistList from './TopArtistList';


export default class MetricTile extends React.Component {

    constructor(props) {
        super()
        this.state = {
            metric: <TopArtistList name="trevor"/>
        }
    }

    render() {
        return (
            <div className="metric-tile">
                {this.state.metric}
            </div>
        )
    }
}