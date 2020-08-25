import * as React from 'react';

import { Button } from 'dooboo-ui';
import CenterView from '../CenterView';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';

const Image = styled.Image``;

storiesOf('Atoms', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('button', () => (
    <>
      <Button testID="btn" isLoading={false} onPress={() => {}}>
          😀 😎 👍 💯
      </Button>
      {/* Button Style Accent  */}
      <Button
        style={{
          backgroundColor: '#109CF1',
        }}
        hoverStyle={{
          backgroundColor: '#34AFF9',
        }}
        Accent={{
          shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.24,
          shadowRadius: 16.0,
          elevation: 10,
          borderRadius: 4,
        }}
        textStyle={{ color: '#FFFFFF' }}
        onPress={() => alert('Clicked')}
        text={'Accent button '}
      />
      {/* Button Style Secondary   */}
      <Button
        hoverTextStyle={{
          color: '#34AFF9',
        }}
        Secondary={{
          borderColor: '#109CF1',
          borderWidth: 2,
          shadowColor: 'black',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.24,
          shadowRadius: 16.0,
          elevation: 10,
          borderRadius: 4,
        }}
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
    </>
  ));
