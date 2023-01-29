export const isEmailValid = (email: string) => {
  if (!email) return false;

  const expression = /\S+@\S+\.\S+/;
  return expression.test(email);
};
