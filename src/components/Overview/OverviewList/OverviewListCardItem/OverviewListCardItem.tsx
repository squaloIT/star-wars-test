import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const OverviewListCardItem = ({
  category,
  id,
  title,
  subtitle,
  body,
}: {
  category: string | undefined;
  id: number;
  title: string;
  subtitle: string;
  body: string;
}) => {
  let navigate = useNavigate();

  const goToDetails = (id: number) => {
    navigate(`/overview/${category}/${id}`);
  };

  return (
    <Card
      sx={{
        border: "1px solid #FFE81F",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          color="text.secondary"
          gutterBottom
          sx={{
            typography: {
              sm: { textAlign: "center" },
              xs: { textAlign: "center" },
            },
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{
            typography: {
              sm: { textAlign: "center" },
              xs: { textAlign: "center" },
            },
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          color="text.secondary"
          sx={{
            mb: 1.5,
            typography: {
              sm: { textAlign: "center" },
              xs: { textAlign: "center" },
            },
          }}
        >
          {body}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          size="small"
          sx={{ color: "#FFE81F" }}
          onClick={() => goToDetails(id)}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
