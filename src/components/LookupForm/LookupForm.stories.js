import React from 'react';
import { storiesOf } from '@storybook/react';
import LookupForm from './LookupForm.jsx';

storiesOf('LookupForm', module)
  .add('Initial State', () => (
      <LookupForm  />
  ));