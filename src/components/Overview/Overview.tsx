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


