import { useParams } from "react-router-dom";
import { useList } from "../../../hooks/useList";
import { OverviewGridStyled } from "../OverviewStyled";
import { OverviewListCardItem } from "./OverviewListCardItem/OverviewListCardItem";
import { Grid } from "@mui/material";

export const OverviewList = () => {
  const { category } = useParams();
  const list = useList(category);

  return (
    <OverviewGridStyled container spacing={2}>
      {list.map((el) => (
        <Grid item xs={12} sm={6} lg={4} xl={3} key={JSON.stringify(el)}>
          <OverviewListCardItem {...el} category={category} />
        </Grid>
      ))}
    </OverviewGridStyled>
  );
};
