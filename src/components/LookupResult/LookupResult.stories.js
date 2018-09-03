import React from 'react';
import { storiesOf } from '@storybook/react';
import LookupResult from './LookupResult.jsx';

storiesOf('LookupResult', module)
  .add('Loading State', () => (
      <LookupResult isLoading={true} madeInitialCall={true} />
  ))
  .add('With Result Data', () => (
      <LookupResult
        isLoading={false}
        madeInitialCall={true}
        address={'19TH & HAINES STS'}
        division={'10'}
        lat={"40.058438400000"}
        locationName={"ROWEN SCHOOL"}
        long={"-75.149222200000"}
        ward={'10'}
        zip={'19138'}
    />
  ))
  .add('Error Screen', () => (
    <LookupResult
        madeInitialCall={true}
        showErrorScreen={true}
    />
  ));