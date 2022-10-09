import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { didUserLoggedThisMonth } from "../../utils";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { validationError, onAuth, changeField } = useAuth();
  let navigate = useNavigate();

  useEffect(() => {
    if (!didUserLoggedThisMonth()) {
      navigate("/overview/planets");
    }
  }, []);
  
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "primary.dark",
          borderRadius: "8px",
          p: "30px",
          transition: "padding 0.5s",
          "&:hover": {
            p: "0px",
          },
        }}
      >
        <Box
          bgcolor="primary.dark"
          p="20px"
          sx={{
            display: "flex",
            justifyContent: "center",
            borderRadius: "4px",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1em",
          }}
        >
          <Box width="100%">
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
              sx={{ marginTop: "20px" }}
              label="Password:"
              variant="outlined"
              type="password"
              onChange={changeField}
              fullWidth={true}
              required
            />
          </Box>

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
        </Box>
      </Box>
    </Container>
  );
};
