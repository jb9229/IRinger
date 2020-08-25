import Button from './Button';
import CenterView from './CenterView';
import React from 'react';
import { Text } from 'react-native';
import Welcome from './Welcome';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react-native';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
