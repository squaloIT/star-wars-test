import { Routes, Route, Navigate } from "react-router-dom";
import { NotFound } from "./components/NotFound/NotFound";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Login } from "./components/Login/Login";
// I could change tsconfig, but I hate to do it :)
const Image = require("./assets/background.jfif");

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const didUserLoggedThisMonth = (): boolean => {
    const timestamp = Number(localStorage.getItem("starWarsLoginDate"))
    const timestampNow = new Date().getTime()

    return (timestampNow - timestamp) > 1000 * 60 * 60 * 25* 30;
  }
  
  const redirectToLogin =  (
    <Navigate
      to={{
        pathname: didUserLoggedThisMonth() ? "/login" : '/overview/planets',
      }}
    />
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <Container
        maxWidth={false}
        disableGutters={true}
        sx={{ height: "100vh", backgroundImage: `url(${Image})` }}
      >
        <CssBaseline />
        <Routes>
          <Route path="/" element={redirectToLogin} />
          <Route path="/login" element={<Login />} />
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
