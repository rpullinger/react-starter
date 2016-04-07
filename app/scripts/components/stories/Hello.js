import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Hello from '../Hello';

storiesOf('Hello', module)
  .add('with no name', () => (
    <Hello />
  ))
  .add('with a name', () => (
    <Hello name="Richard" />
  ));
