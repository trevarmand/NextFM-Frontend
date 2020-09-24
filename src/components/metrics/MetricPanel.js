import React from 'react';
import MetricTile from './MetricTile';
import TopArtistList from './TopArtistList';

export default class MetricPanel extends React.Component {
    constructor(props) {
        super()
        this.state = {
            metricTileList: this.loadMetricTiles()
        }
    }

    render() {
        return (
        <div className="metric-panel">{this.state.metricTileList}</div>
        )
    }

    loadMetricTiles() {
        return [<MetricTile/>]
    }
}