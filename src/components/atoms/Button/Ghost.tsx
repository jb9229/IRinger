import { Button } from 'dooboo-ui';
import styled from 'styled-components/native';

const GhostButton = styled(Button).attrs(() => ({
  textStyle: {
    color: '#109CF1'
  },
  containerStyle: {
    borderColor: '#109CF1',
    borderWidth: 2,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.24,
    shadowRadius: 16.0,
    elevation: 10,
    borderRadius: 4
  }
}))`
`;

export default GhostButton;
