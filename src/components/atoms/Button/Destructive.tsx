import { Button } from 'dooboo-ui';
import styled from 'styled-components/native';

const DestructiveButton = styled(Button).attrs((props) => ({
  textStyle: {
    color: props.theme.error
  },
  containerStyle: {
  }
}))`
  background-color: white;
  border-width: 2px;
  border-color: ${(props) => props.theme.error};
`;

export default DestructiveButton;
