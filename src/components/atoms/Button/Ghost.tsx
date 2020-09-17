import { Button } from 'dooboo-ui';
import styled from 'styled-components/native';

const GhostButton = styled(Button).attrs(() => ({
  textStyle: {
    color: '#109CF1'
  },
  containerStyle: {
  }
}))`
  border-color: #109CF1;
  border-width: 2px;
  border-radius: 4px;
`;

export default GhostButton;
