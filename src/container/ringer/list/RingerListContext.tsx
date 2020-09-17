import { RingerInjection } from '../types';
import createCtx from 'contexts/CreateCtx';

// Set Context
export interface Context
{
  onClickAddRinger: () => void;
  onAddMonitoring: () => void;
}

const [useCtx, Provider] = createCtx<Context>();

export { useCtx as useRingerListContext, Provider };
