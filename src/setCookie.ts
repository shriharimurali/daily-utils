export const setCookie = (cookieName: string, cookieValue: string, expireInDays = 0) => {
  if (!cookieName || !cookieValue) return null;

  const date = new Date();
  date.setTime(date.getTime() + expireInDays);
  const expires = `expires=${date.toString()}`;
  document.cookie = `${cookieName}=${cookieValue};${expires};path=/`;
};
