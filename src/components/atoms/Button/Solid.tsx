import { Button } from 'dooboo-ui';
import styled from 'styled-components/native';

const SoildButton = styled(Button).attrs(() => ({
  textStyle: {
    color: 'white'
  },
  containerStyle: {
    width: '100%'
  },
  disabledStyle: {
    style: {
      width: '100%'
    }
  }
}))`
  width: 100%;
  background-color: ${(props) => props.theme.backgroundDark};
  border-radius: 4px;
  shadow-color: black;
  shadow-offset: 0px 5px;
  shadow-opacity: 0.24;
  shadow-radius: 16.0px;
  elevation: 4;
`;

export default SoildButton;
