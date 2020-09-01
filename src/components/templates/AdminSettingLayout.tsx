import * as React from 'react';

import SoildButton from '../atoms/Button/Solid';
import styled from 'styled-components/native';
import { useAdminSettingContext } from 'src/container/admin/AdminSettingContext';

const Container = styled.View``;
const Contents = styled.View`
  flex: 1;
`;
const Footer = styled.View`
  flex-direction: row;
`;

const AdminSettingLayout:React.FC = (): React.ReactElement =>
{
  const { onClickAddRinger } = useAdminSettingContext();

  return (
    <Container>
      <Contents>
        <SoildButton
          text="링거 추가"
          onPress={onClickAddRinger}
        />
      </Contents>
      <Footer>
      </Footer>
    </Container>
  );
};

export default AdminSettingLayout;