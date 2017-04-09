import React from 'react';
import { storiesOf, action, addDecorator, linkTo
} from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';

const CenterDecorator = (story) => (
  <div style={{ textAlign: "center" }}>
    {story()}
  </div>
);
addDecorator(CenterDecorator);

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Es geht auch so</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));
