import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LookupResult from '../LookupResult/LookupResult';

const axios = require ('axios');

const styles = theme => ({
  button: {
      margin: theme.spacing.unit
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const withLookupResult = (Component) => (props) => 
    !props.result
        ? null
        : <Component {...props} />;

const withLookupLoadingIndicator = (Component) => (isLoadingResult, ...others) =>
    isLoadingResult
        ? <div>Loading Result</div>
        : <Component {...others} />;

class TextFields extends React.Component {
  state = {
    ward: '',
    division: '',
    address: '',
    zip: '',
    locationName: '',
    lat: '',
    long: '',
    isLoading: true,
    madeInitialCall: null,
    showErrorScreen: false
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleClick = () => {
      this.setState({
        isLoading: true,
        madeInitialCall: true
      });
      axios.get(`http://api.phila.gov:80/polling-places/v1/?ward=${this.state.ward}&division=${this.state.division}`)
        .then((resp) => {
            if ( resp.data.features.length === 0 ) {
              console.log('here');
              this.setState({
                isLoading: false,
                showErrorScreen: true
              });
              <LookupResult />
            } else {
              const {
                display_address: returnAddress,
                location: returnLocation,
                lat: returnLat,
                lng: returnLng,
                zip_code: zip
              } = resp.data.features[0].attributes;

              if ( returnLat === '' || returnLng === '' ) {
                this.setState({
                  showErrorScreen: true
                });
              } else {
                this.setState({
                  address: returnAddress,
                  locationName: returnLocation,
                  lat: returnLat,
                  long: returnLng,
                  zip: zip,
                  isLoading: false,
                  showErrorScreen: false
                });
              }
            }
        });
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="ward"
          label="Ward"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('ward')}
          margin="normal"
        />
        <TextField
          id="division"
          label="Division"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('division')}
          margin="normal"
        />
        <Button variant="contained" color="primary" className={classes.button} fullWidth={true} onClick={this.handleClick} >
            Find Location
        </Button>
        <LookupResult {...this.state} />
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
