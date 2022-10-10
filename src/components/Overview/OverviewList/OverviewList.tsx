import { useParams } from "react-router-dom";
import { useList } from "../../../hooks/useList";
import { OverviewGridStyled } from "../OverviewStyled";
import { OverviewListCardItem } from "./OverviewListCardItem/OverviewListCardItem";

export const OverviewList = () => {
  const { category } = useParams();
  const list = useList(category);

  return (
    <OverviewGridStyled container spacing={2}>
      {list.map((el) => (
        <OverviewListCardItem {...el} key={JSON.stringify(el)} />
      ))}
    </OverviewGridStyled>
  );
};
