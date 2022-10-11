import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export const Header = () => {
  const { category } = useParams();

  return (
    <div>
      <Box sx={{ height: "50px", display:'flex', justifyContent: 'space-between' }}>
        <Breadcrumbs>
          <Link underline="hover" color="inherit">
            overview
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href={`/overview/${category}`}
          >
            {category}
          </Link>
        </Breadcrumbs>

        <div>
          <MenuIcon />
        </div>
      </Box>

      <Box sx={{ height: "100px" }}>
        <Typography
          variant="h3"
          component="div"
          sx={{ textTransform: "capitalize" }}
        >
          {category}
        </Typography>
      </Box>
    </div>
  );
};
