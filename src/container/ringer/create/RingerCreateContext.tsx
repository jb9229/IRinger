import createCtx from 'contexts/CreateCtx';

// Set Context
export interface Context {
}

const [useCtx, Provider] = createCtx<Context>();

export { useCtx as useRingerCreateContext, Provider };
