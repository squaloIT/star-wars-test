import { Outlet, useParams } from "react-router-dom";
import { useList } from "../../hooks/useList";
import { Header } from "./Header/Header";
import { LeftSidebar } from "./LeftSidebar/LeftSidebar";
import {
  OverviewStyled,
  OverviewWrapperStyled,
} from "./OverviewStyled";

export const Overview = () => {
  const { category } = useParams();
  const {list, mapAndSetList} = useList(category);

  return (
    <OverviewWrapperStyled>
      <LeftSidebar />

      <OverviewStyled>
        <Header mapAndSetList={mapAndSetList}/>
        <Outlet context={list}/>
      </OverviewStyled>
    </OverviewWrapperStyled>
  );
};


