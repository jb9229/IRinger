import { RingerCreateDto, RingerCreateErrorData } from './type';

import createCtx from 'contexts/CreateCtx';

// Set Context
export interface Context {
  createDto: RingerCreateDto;
  errorData: RingerCreateErrorData;
  onClickGoBack: () => void;
  onSubmit: () => void;
}

const [useCtx, Provider] = createCtx<Context>();

export { useCtx as useRingerCreateContext, Provider };
