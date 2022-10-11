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
    <Grid item xs={12} sm={6} lg={4} xl={3}>
      <Card
        sx={{
          border: "1px solid #FFE81F",
        }}
      >
        <CardContent>
          <Typography variant="h5" color="text.secondary" gutterBottom sx={{ typography: { sm: { textAlign: 'center'}, xs: { textAlign: 'center'} } }}>
            {title}
          </Typography>
          <Typography variant="h6" component="div" sx={{ typography: { sm: { textAlign: 'center'}, xs: { textAlign: 'center'} } }}>
            {subtitle}
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 1.5, typography: { sm: { textAlign: 'center'}, xs: { textAlign: 'center'} } }}>
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
