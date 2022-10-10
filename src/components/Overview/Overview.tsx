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
import { useParams } from "react-router-dom";
import { LeftSidebar } from "./LeftSidebar/LeftSidebar";
import {
  OverviewGridStyled,
  OverviewStyled,
  OverviewWrapperStyled,
} from "./OverviewStyled";

export const Overview = () => {
  const params = useParams();
  return (
    <OverviewWrapperStyled>
      <LeftSidebar></LeftSidebar>

      <OverviewStyled>
        <Box sx={{ height: "50px" }}>
          <Breadcrumbs>
            <Link underline="hover" color="inherit">
              overview
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href={`/overview/${params.category}`}
            >
              {params.category}
            </Link>
          </Breadcrumbs>
        </Box>

        <Box sx={{ height: "100px" }}>
          <Typography variant="h3" component="div">
            {params.category}
          </Typography>
        </Box>

        <OverviewGridStyled container spacing={2}>
          <Grid item xs={1} md={3}>
            <BasicCard />
          </Grid>
          <Grid item xs={1} md={3}>
            <BasicCard />
          </Grid>
          <Grid item xs={1} md={3}>
            <BasicCard />
          </Grid>
          <Grid item xs={1} md={3}>
            <BasicCard />
          </Grid>
          <Grid item xs={1} md={3}>
            <BasicCard />
          </Grid>
        </OverviewGridStyled>
      </OverviewStyled>
    </OverviewWrapperStyled>
  );
};

function BasicCard() {
  return (
    <Card
      sx={{
        // backgroundColor: "whitesmoke",
        border: "1px solid #FFE81F",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          benevolent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        {/* <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: "#FFE81F" }}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
