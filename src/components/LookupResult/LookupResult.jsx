import React from 'react';
import ResultMap from '../ResultMap/ResultMap.jsx';
import CircularIndeterminate from '../LoadingIndicator/LoadingIndicator.jsx';

class LookupResult extends React.Component {
    constructor(props) {
        super(props);
    }
    renderResult() {
        if(this.props.isLoading) {
            return <CircularIndeterminate size={100} />
        } else if ( this.props.showErrorScreen ) {
            return <div>
                We are sorry, but that address could not be processed.
            </div>
        } else {
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
    render() {
        if (this.props.madeInitialCall === true) {
            return(
                <div>
                    {this.renderResult()}
                </div>
            )
        } else {
            return null;
        }
    }
}

export default LookupResult;