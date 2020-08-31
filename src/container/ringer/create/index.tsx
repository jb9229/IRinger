import * as React from 'react';

import RingerCreateLayout from 'templates/RingerCreateLayout';
import RingerCreateProvider from './RingerCreateProvider';

const RingerCreateContainer:React.FC = (): React.ReactElement =>
{
  return (
    <RingerCreateProvider>
      <RingerCreateLayout />
    </RingerCreateProvider>
  );
};

export default RingerCreateContainer;
