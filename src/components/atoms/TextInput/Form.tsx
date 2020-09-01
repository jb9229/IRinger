import { EditText } from 'dooboo-ui';
import styled from 'styled-components/native';

export const FormEditText = styled(EditText).attrs(() => ({
  labelTextStyle: {
    color: 'black'
  }
}))`
  margin-top: 25px;
`;
