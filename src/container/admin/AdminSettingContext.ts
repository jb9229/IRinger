import { Ringer } from '../ringer/create/type';
import createCtx from 'contexts/CreateCtx';

// Set Context
export interface Context
{
  ringerList: Array<Ringer>;
  onClickAddRinger: () => void;
}

const [useCtx, Provider] = createCtx<Context>();

export { useCtx as useAdminSettingContext, Provider };
