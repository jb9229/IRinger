import { Button } from 'dooboo-ui';
import styled from 'styled-components/native';

const DefaultButton = styled(Button).attrs(() => ({
  textStyle: {
    color: 'white'
  }
}))`
  /* background-color: #109CF1; */
  background-color: ${(props) => props.theme.backgroundDark};
  shadow-color: black;
  shadow-offset: {
    width: 0;
    height: 4;
  };
  shadow-opacity: 0.24;
  shadow-radius: 16.0;
  elevation: 10;
  border-radius: 4;
`;

export default DefaultButton;
