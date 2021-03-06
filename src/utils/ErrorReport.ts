import Sentry from './Sentry';

export const noticeUserError = (location: string, error: any, user?: User): void =>
{
  /**
   * TODO redux-tools? reconcil? call onpen kakaoaskmodal
   */
  console.error(error);
  alert('불편을 드려 죄송합니다. \n 해당 문제는 잘 보고 되었습니다.\n 조속히 조치 하겠습니다!\n\n추가 불편한 점은\n 메일문의 해주세요.');
  Sentry.captureMessage(`Location: ${location}\n\n Error Message: ${error?.message}\nn User: ${user?.uid}`);
  error && Sentry.captureException(error);
};
