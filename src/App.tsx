import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const redirectToLogin = (
    <Navigate
      to={{
        pathname: "/login",
      }}
    />
  );

  return (
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
      </Routes>
  );
}

export default App;
