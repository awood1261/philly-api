import React from 'react';
import ResultMap from '../ResultMap/ResultMap.jsx';

class LookupResult extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Congratulations, We've found your voting location!</h2>
                <h3>Results for Ward {this.props.ward}, Division {this.props.division}</h3>
                <p>Location: <strong>{this.props.locationName}</strong></p>
                <p>Address: <strong>{this.props.address}</strong></p>
                <ResultMap {...this.props} />
            </div>
        )
    }
}

export default LookupResult;