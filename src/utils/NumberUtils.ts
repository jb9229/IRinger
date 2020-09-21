/**
 * 숫자, 컴마스트링변환 함수
 * @param no 변환할 숫자
 * @param pointDigit 소수점 자릿수
 */
export const commafyNumber = (no: number): string =>
{
  if (!isNumeric(no)) { return '' }

  return no.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * 소수점 자릿수 계산
 * @param pointDigit 소수점 자릿수
 */
export const convertNumberPointDigit = (no: number, pointDigit: number): number =>
{
  if (!isNumeric(no)) { return no }

  const pointUnit = Math.pow(10, pointDigit);
  const convertNumber = Math.round(no * pointUnit) / pointUnit;

  return convertNumber;
};

export function isNumeric(data: any): boolean
{
  if (typeof data !== 'number' || isNaN(data)) { return false }

  return true;
}
