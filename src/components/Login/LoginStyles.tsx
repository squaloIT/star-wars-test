import { styled } from "@mui/material/styles";

export const ContainerStyled = styled("div")(({ theme }) => ({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const LoginFormWrapperStyled = styled("div")(({ theme }) => ({
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: theme.palette.primary.dark,
  borderRadius: "8px",
  padding: "30px",
  width:'50%',

  [theme.breakpoints.up("lg")]: {
    width:'40%',
  },
  [theme.breakpoints.down("lg")]: {
    width:'55%',
  },
  [theme.breakpoints.up("md")]: {
    transition: "padding 0.5s",
    "&:hover": {
      padding: "0px",
    },
  },
  [theme.breakpoints.down("md")]: {
    padding: "0px 30px",
    border: "0px",
    // height: "50%",
    width:'75%'
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0px 10px",
    transition: "none",
    border: "0px",
    height: "50%",
    width: "100%",
    display: "flex",
  },
}));


export const LoginFormStyled = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  borderRadius: "4px",
  alignItems: "center",
  flexWrap: "wrap",
  padding: "20px",
  gap: "1em",
  backgroundColor: theme.palette.primary.dark,

  [theme.breakpoints.down("sm")]: {
    height: "fit-content",
  },
}));
