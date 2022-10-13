import { useParams, useOutletContext } from "react-router-dom";
import { OverviewGridStyled } from "../OverviewStyled";
import { OverviewListCardItem } from "./OverviewListCardItem/OverviewListCardItem";
import { Box, Grid, Typography } from "@mui/material";
import { ListItem } from "../../../types";

export const OverviewList = () => {
  const list: ListItem[] = useOutletContext();
  const { category } = useParams();

  return (
    <OverviewGridStyled container spacing={2}>
      {list?.length > 0 ? (
        list.map((el) => (
          <Grid item xs={12} sm={6} lg={4} xl={3} key={JSON.stringify(el)}>
            <OverviewListCardItem {...el} category={category} />
          </Grid>
        ))
      ) : (
        <Box>
          <Typography variant="h4" sx={{p:'20px'}}>There are no list items</Typography>
        </Box>
      )}
    </OverviewGridStyled>
  );
};
