import React, { Component } from 'react';
//could also use 'react-google-maps' package, but keeping this for example/reference purposes.

class Map extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        return <div ref="map" />;
    }
}

export default Map;