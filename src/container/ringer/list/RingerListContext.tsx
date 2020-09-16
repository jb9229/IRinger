import { RingerInjection } from '../types';
import createCtx from 'contexts/CreateCtx';

// Set Context
export interface Context
{
  ringerInjectionList: Array<RingerInjection>
  onClickAddRinger: () => void;
  onAddMonitoring: () => void;
}

const [useCtx, Provider] = createCtx<Context>();

export { useCtx as useRingerListContext, Provider };
