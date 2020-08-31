import * as React from 'react';

import { Provider } from './RingerCreateContext';

const RingerCreateProvider:React.FC = (props): React.ReactElement =>
{
  const states = {
  };

  const actions = {
    
  };

  return (
    <Provider value={{ ...states, ...actions }}>{props.children}</Provider>
  );
};

export default RingerCreateProvider;
