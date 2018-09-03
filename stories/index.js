import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../src/components/Button/Button.jsx';
import LookupResult from '../src/components/LookupResult/LookupResult.jsx';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';

const stories = storiesOf('Storybook Knobs', module);
stories.addDecorator(withKnobs);

stories.add('as dynamic variables', () => {
    const name = text('Name', 'Arunoda Susiripala');
    const age = number('Age', 89);
  
    const content = `I am ${name} and I'm ${age} years old.`;
    return (<div>{content}</div>);
  });

  stories.add('Result Data With Knobs', () => (
    <LookupResult
        isLoading={boolean('isLoading', false)}
        madeInitialCall={boolean('madeInitialCall', true)}
        address={text('address', '19TH & HAINES STS')}
        division={text('division', '10')}
        lat={text('lat', "40.058438400000")}
        locationName={text('locationName', "ROWEN SCHOOL")}
        long={text('long', "-75.149222200000")}
        ward={text('ward', '10')}
        zip={text('zip', '19138')}
    />
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));