import * as React from 'react';

import styled, { DefaultTheme } from 'styled-components/native';

import { Button } from 'dooboo-ui';
import CenterView from '../CenterView';
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
`;
const LoadingButton = styled(Button)<DefaultTheme>`
`;

storiesOf('Atoms', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('buttons', () => (
    <Container>
      <Title>IRinger Button Types & Style</Title>

      {/* <LoadingButton testID="btn" isLoading={false} onPress={() => {}}>
          😀 😎 👍 💯
      </LoadingButton> */}
      {/* Button Style Accent  */}
      <SubTitle>Brand or Solid or Contained Button</SubTitle>
      <SoildButton
        onPress={() => alert('Clicked')}
        text={'Solid button'}
      />
      <SubTitle>Ghost Button</SubTitle>
      <GhostButton text="Ghost button" />
      {/* Button Style Secondary   */}
      <Button
        hoverTextStyle={{
          color: '#34AFF9'
        }}
        // Secondary={{
        //   borderColor: '#109CF1',
        //   borderWidth: 2,
        //   shadowColor: 'black',
        //   shadowOffset: {
        //     width: 0,
        //     height: 4,
        //   },
        //   shadowOpacity: 0.24,
        //   shadowRadius: 16.0,
        //   elevation: 10,
        //   borderRadius: 4,
        // }}
        style={{
          marginVertical: 40,
        }}
        textStyle={{ color: '#109CF1' }}
        onPress={() => alert('Clicked')}
        text={'Secondary'}
      />
      <Button
        style={{
          marginVertical: 40,
          color: 'red'
        }}
        isDisabled={true}
        onPress={() => {}}>
        This is disabled!!
      </Button>
      <Button
        testID="btnGoogle"
        // iconLeft={<Image source={IC_GOOGLE} />}
        // isLoading={googleLoading}
        indicatorColor="#023059"
        onPress={() => {
          // setGoogleLoading(true);
          // const timeout = setTimeout(() => {
          //   setGoogleLoading(false);
          //   clearTimeout(timeout);
          // }, 2000);
        }}>
        GOOGLE SIGN IN
      </Button>
      <Button
        testID="btnFacebook"
        // iconLeft={<Image source={IC_FACEBOOK} />}
        indicatorColor="#023059"
        // isLoading={facebookLoading}
        style={{
          marginTop: 40,
          backgroundColor: '#ccc',
          borderWidth: 0.5,
          borderRadius: 0,
        }}
        onPress={() => {
          // setFacebookLoading(true);
          // const timeout = setTimeout(() => {
          //   setFacebookLoading(false);
          //   clearTimeout(timeout);
          // }, 2000);
        }}>
        FACEBOOK SIGN IN
      </Button>
    </Container>
  ));
