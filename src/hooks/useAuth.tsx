import { useState } from "react";

type UserCredentials = {
  username: string;
  password: string;
};

export const useAuth = () => {
  const [validationError, setValidationError] = useState("");
  const [authState, setAuthState] = useState<UserCredentials>({
    username: "",
    password: "",
  });

  const checkUserCredentials = (username: string, password: string): boolean =>
    username === "test" && password === "test";

  const onAuth = () => {
    const { username, password } = authState;
    if (checkUserCredentials(username, password)) {
      setValidationError("");
      localStorage.setItem("starWarsLoginDate", `${new Date().getTime()}`);

      return;
    }

    setValidationError(
      "Check you user credentials! Maybe they are test - test ;)."
    );
  };

  const changeField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return { validationError, onAuth, changeField };
};
