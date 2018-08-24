import React from 'react';

class ResultMap extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidUpdate() {
        // // The location of Uluru
        // var uluru = {lat: -25.344, lng: 131.036};
        // // The map, centered at Uluru
        // var map = new google.maps.Map(
        //     document.getElementById('map'), {zoom: 4, center: uluru});
        // // The marker, positioned at Uluru
        // var marker = new google.maps.Marker({position: uluru, map: map});
    }
    render() {
        return (
            <div className="map">
                <iframe
                width="500"
                height="300"
                frameBorder="0"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCtf7PW9UwPDtWekq8PTt0oe9PTXQ5Sans
                    &q=${this.props.lat},${this.props.long}&zoom=15`} allowFullScreen>
                </iframe>
            </div>
        )
    }
}

export default ResultMap;