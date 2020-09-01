import * as React from 'react';

import AdminSettingLayout from 'templates/AdminSettingLayout';
import AdminSettingProvider from './AdminSettingProvider';
import { RootStackParamList } from 'src/navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'RingerCreate'>
}
const AdminSettingContainer:React.FC<Props> = (props): React.ReactElement =>
{
  return (
    <AdminSettingProvider navigation={props.navigation}>
      <AdminSettingLayout />
    </AdminSettingProvider>
  );
};

export default AdminSettingContainer;
