import { Button, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { didUserLoggedThisMonth } from "../../utils";
import { useNavigate } from "react-router-dom";
import { ContainerStyled, LoginFormStyled, LoginFormWrapperStyled } from "./LoginStyles";

export const Login = () => {
  const { validationError, onAuth, changeField } = useAuth();
  let navigate = useNavigate();

  useEffect(() => {
    if (!didUserLoggedThisMonth()) {
      navigate("/overview/planets");
    }
  }, []);


  return (
    <ContainerStyled>
      <LoginFormWrapperStyled>
        <LoginFormStyled>
            <Typography
              variant="body2"
              align="center"
              gutterBottom
              sx={{
                color: "error.dark",
                fontWeight: "bold",
                mb: "5px",
                p: "5px",
              }}
            >
              {validationError}
            </Typography>
            <TextField
              name="username"
              label="Username:"
              variant="outlined"
              fullWidth={true}
              autoFocus
              required
              onChange={changeField}
            />
            <TextField
              name="password"
              label="Password:"
              variant="outlined"
              type="password"
              onChange={changeField}
              fullWidth={true}
              required
            />
          <Button
            variant="contained"
            sx={{
              color: "white",
              backgroundColor: "info.dark",
              "&:hover": {
                backgroundColor: "info.dark",
                opacity: [0.8],
              },
            }}
            onClick={onAuth}
          >
            Login
          </Button>
        </LoginFormStyled>
      </LoginFormWrapperStyled>
    </ContainerStyled>
  );
};
