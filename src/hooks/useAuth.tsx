import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserCredentials } from "../types";

export const useAuth = () => {
  const [validationError, setValidationError] = useState("");
  const [authState, setAuthState] = useState<UserCredentials>({
    username: "",
    password: "",
  });
  let navigate = useNavigate();

  const checkUserCredentials = (username: string, password: string): boolean =>
    username === "test" && password === "test";

  const onAuth = () => {
    const { username, password } = authState;
    if (checkUserCredentials(username, password)) {
      setValidationError("");
      localStorage.setItem(String(process.env.REACT_APP_LOGIN_DATE), `${new Date().getTime()}`);
      navigate("/overview/planets");
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
