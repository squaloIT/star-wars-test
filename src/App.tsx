import { Routes, Route, Navigate } from "react-router-dom";
import { NotFound } from "./components/NotFound/NotFound";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const redirectToLogin = (
    <Navigate
      to={{
        pathname: "/login",
      }}
    />
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <Container maxWidth={false} disableGutters={true}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={redirectToLogin} />
          <Route path="/login" element={<h1>LOGIN</h1>} />
          <Route
            path="overview/:category"
            element={<h1>TESTIRANJE KATEGORIJE</h1>}
          />
          <Route
            path="category/:category/:detail_id"
            element={<h1>TESTIRANJE KATEGORIJE I PROJECT DETAILS</h1>}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
