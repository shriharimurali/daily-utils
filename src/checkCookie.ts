import { getCookie } from './getCookie';

export const checkCookie = (cookieName: string) => {
  const cookieExist = getCookie(cookieName);

  if (cookieExist === '') return false;
  return cookieExist;
};
