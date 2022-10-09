import { Box, Button, Container, TextField } from "@mui/material";

export const Login = () => {
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
            <TextField
              id="outlined-basic"
              label="Username:"
              variant="outlined"
              defaultValue="John Doe"
              fullWidth={true}
              required
            />
            <TextField
              id="outlined-password-input"
              sx={{ marginTop: "20px" }}
              label="Password:"
              variant="outlined"
              type="password"
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
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
