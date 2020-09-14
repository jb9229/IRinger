import { RingerCreateDto, RingerCreateErrorData, RingerCreateValidScheme, ValidationResult } from './type';

export const validateCreateRinger = (dto: RingerCreateDto): Promise<ValidationResult> =>
{
  const errorData = new RingerCreateErrorData();

  return RingerCreateValidScheme.validate(dto, { abortEarly: false })
    .then(() => { return { result: true, error: errorData } })
    .catch((err: any) =>
    {
      err.errors.forEach((e: string) =>
      {
        if (e.startsWith('[name]')) { errorData.name = (e.replace('[name]', '')) }
        if (e.startsWith('[sn]')) { errorData.sn = (e.replace('[sn]', '')) }
        if (e.startsWith('[userId]')) { errorData.userId = (e.replace('[userId]', '')) }
        if (e.startsWith('[hospitalId]')) { errorData.hospitalId = (e.replace('[hospitalId]', '')) }
      });

      return { result: false, error: errorData };
    });
};
