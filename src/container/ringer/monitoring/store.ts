import { atom, atomFamily } from 'recoil';

import { RingerInjection } from '../types';

export const monitoringListState = atom<Array<RingerInjection>>({
  key: 'monitoringListState', // unique ID (with respect to other atoms/selectors)
  default: [] // default value (aka initial value)
});
