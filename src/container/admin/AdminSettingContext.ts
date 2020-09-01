import createCtx from 'contexts/CreateCtx';

// Set Context
export interface Context
{
  onClickAddRinger: () => void;
}

const [useCtx, Provider] = createCtx<Context>();

export { useCtx as useAdminSettingContext, Provider };
