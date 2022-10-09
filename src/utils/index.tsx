export const didUserLoggedThisMonth = (): boolean => {
  const timestamp = Number(
    localStorage.getItem(String(process.env.REACT_APP_LOGIN_DATE))
  );
  const timestampNow = new Date().getTime();

  return timestampNow - timestamp > 1000 * 60 * 60 * 25 * 30;
};