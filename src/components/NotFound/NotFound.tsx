import Box from "@mui/material/Box";
import notFoundImage from "./../../assets/404.jpg";

export const NotFound = () => {
  return (
    <Box
      sx={{
        bgcolor: "#131311",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={notFoundImage} />
    </Box>
  );
};
