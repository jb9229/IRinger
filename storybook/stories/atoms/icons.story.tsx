import * as React from 'react';

import CenterView from '../CenterView';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
`;
const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 40px;
`;
const SubTitle = styled.Text`
  margin-top: 20px;
`;
const StyledImage = styled.Image`

`;

storiesOf('Icon', module)
  .addDecorator((getStory: () => React.ReactElement) => <CenterView>{getStory()}</CenterView>)
  .add('brand icons', () => (
    <Container>
      <Title>IRinger Brand Image & Icon</Title>
      <SubTitle>App Icon</SubTitle>
      <StyledImage source={require('assets/images/iRingerIcon.png')} />
    </Container>
  ));
