import {
  Box,
  Breadcrumbs,
  Drawer,
  Link,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useOpenMediaQuery } from "../../../hooks/useOpenMediaQuery";
import { MenuList } from "../MenuList/MenuList";

export const Header = () => {
  const { category } = useParams();
  const {isOpened, setIsOpened, isMatching} = useOpenMediaQuery(false)

  const openMenu = () => {
    setIsOpened((prevValue) => !prevValue);
  };

  return (
    <div>
      <Box
        sx={{
          height: "50px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
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

        {isMatching && (
          <Box sx={{ position: "relative", zIndex: "2" }}>
            <MenuIcon onClick={openMenu} />
          </Box>
        )}
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

      <Drawer
        open={isOpened}
        onClose={() => setIsOpened(false)}
        anchor="top"
      >
        <MenuList width='100%' />
      </Drawer>
    </div>
  );
};
