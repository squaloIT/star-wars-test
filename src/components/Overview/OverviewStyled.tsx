import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const OverviewWrapperStyled = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
}));

export const OverviewGridStyled = styled(Grid)(({ theme }) => ({
  display: "flex",
  // flexWrap: 'wrap',
  // alignItems: 'flex-start',
}));

export const OverviewStyled = styled('div')(({ theme }) => ({
  width: "80%",
  display: "flex",
  flexWrap: 'wrap',
  padding: '20px',
  flexDirection: "column",

  [theme.breakpoints.down("lg")]: {
    width:'70%',
  },
  [theme.breakpoints.down("md")]: {
    width:'100%',
  },
}));
