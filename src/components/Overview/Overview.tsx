import {
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  Link,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "./Header/Header";
import { LeftSidebar } from "./LeftSidebar/LeftSidebar";
import { OverviewList } from "./OverviewList/OverviewList";
import {
  OverviewStyled,
  OverviewWrapperStyled,
} from "./OverviewStyled";

export const Overview = () => {
  return (
    <OverviewWrapperStyled>
      <LeftSidebar />

      <OverviewStyled>
        <Header />
        <OverviewList />
      </OverviewStyled>

    </OverviewWrapperStyled>
  );
};


