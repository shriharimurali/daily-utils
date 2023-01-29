export const getEmailDomain = (email: string) => {
  if (!email) return false;

  return email.split('@')[1];
};
