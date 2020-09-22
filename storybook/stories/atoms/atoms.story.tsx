import * as React from 'react';

import styled, { DefaultTheme } from 'styled-components/native';

import { Button } from 'dooboo-ui';
import CenterView from '../CenterView';
import DestructiveButton from 'src/components/atoms/Button/Destructive';
import FloatButton from 'src/components/atoms/Button/FloatingButton';
import GhostButton from 'src/components/atoms/Button/Ghost';
import SoildButton from 'src/components/atoms/Button/Solid';
import { storiesOf } from '@storybook/react-native';

const Container = styled.View`
  flex: 1;
`;
const ScrollView = styled.ScrollView`
  flex: 1;
`;
const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 40px;
`;
const SubTitle = styled.Text`
  margin-top: 20px;
`;
const LoadingButton = styled(Button)<DefaultTheme>`
`;

storiesOf('Atoms', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('buttons', () => (
    <Container>
      <Title>IRinger Button Types & Style</Title>
      <ScrollView>
        <SubTitle>Brand(Solid) Button</SubTitle>
        <SoildButton
          text={'Solid button'}
        />
        <SubTitle>Ghost Button</SubTitle>
        <GhostButton text="Ghost button" />
        <SubTitle>Light Solid Button</SubTitle>
        <SubTitle>Outline Button</SubTitle>
        <SubTitle>Text Button</SubTitle>
        <SubTitle>Destructive Button</SubTitle>
        <DestructiveButton text="Ghost button" />
        <SubTitle>Icon Button</SubTitle>
        <SubTitle>Icon with Lable Button</SubTitle>
        <SubTitle>Floating Button</SubTitle>
        <FloatButton text="+" onClick={() => {}} />
      </ScrollView>
    </Container>
  ));
