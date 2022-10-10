export const didUserLoggedThisMonth = (): boolean => {
  const ls = localStorage.getItem(String(process.env.REACT_APP_LOGIN_DATE));
  if(ls === null) {
    return false
  }
  const timestamp = Number(ls)
  const timestampNow = new Date().getTime();
  return timestampNow - timestamp <= 1000 * 60 * 60 * 25 * 30;
};
