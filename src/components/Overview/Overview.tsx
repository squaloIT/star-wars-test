import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { LeftSidebar } from "./LeftSidebar/LeftSidebar";
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
        <Outlet />
      </OverviewStyled>
    </OverviewWrapperStyled>
  );
};


