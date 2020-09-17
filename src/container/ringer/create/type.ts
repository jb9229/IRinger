import * as yup from 'yup';

import { getString } from 'src/STRINGS';

/**
 * ENUM
 */
export enum RingerStatus {
  RESET = 'RESET', PROGRESS = 'PROGRESS'
}

export interface Ringer
{
  // userId: string | undefined;
  // hospitalName: Hospital;
  sn: string;
  name: string;
  status: RingerStatus;
}

export class RingerCreateDto
{
  constructor()
  {
    this.sn = '';
    this.name = '';
    this.hospitalId = '';
  }

  userId: string | undefined;
  hospitalId: string;
  sn: string;
  name: string;
}

export class RingerCreateErrorData
{
  constructor()
  {
    this.sn = '';
    this.name = '';
    this.hospitalId = '';
  }

  userId: string | undefined;
  hospitalId: string;
  sn: string;
  name: string;
}

/**
 * Validation Scheme
 */
export interface ValidationResult {
  result : boolean,
  error: RingerCreateErrorData;
}

export const RingerCreateValidScheme = yup.object({
  name: yup.string().required(`[name]${getString('validation.required')}`),
  sn: yup.string()
    .required(`[sn]${getString('validation.required')}`),
  userId: yup.string()
    .required(`[userId]${getString('validation.required')}`),
  hospitalId: yup.string()
    .required(`[hospitalId]${getString('validation.required')}`)
});
