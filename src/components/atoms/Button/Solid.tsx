import { Button } from 'dooboo-ui';
import styled from 'styled-components/native';

const SoildButton = styled(Button).attrs(() => ({
  textStyle: {
    color: 'white'
  },
  containerStyle: {
  }
}))`
  background-color: ${(props) => props.theme.backgroundDark};
  border-radius: 4px;
  shadow-color: black;
  shadow-offset: 0px 5px;
  shadow-opacity: 0.24;
  shadow-radius: 16.0px;
  elevation: 10;
`;

export default SoildButton;
