import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

export const OverviewListCardItem = ({
  title,
  subtitle,
  body,
}: {
  title: string;
  subtitle: string;
  body: string;
}) => {
  return (
    <Grid item xs={1} md={3}>
      <Card
        sx={{
          border: "1px solid #FFE81F",
        }}
      >
        <CardContent>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h6" component="div">
            {subtitle}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {body}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button size="small" sx={{ color: "#FFE81F" }}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
