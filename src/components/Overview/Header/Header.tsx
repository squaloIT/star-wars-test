import {
  Box,
  Breadcrumbs,
  Button,
  Drawer,
  Link,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useParams } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useOpenMediaQuery } from "../../../hooks/useOpenMediaQuery";
import { MenuList } from "../MenuList/MenuList";
import { useBreadcrumbs } from "../../../hooks/useBreadcrumbs";
import SearchIcon from "@mui/icons-material/Search";

export const Header = () => {
  const { category, detail_id } = useParams();
  const theme = useTheme();

  const {
    isOpened: isOpenedSearch,
    setIsOpened: setIsOpenedSearch,
    isMatching: isSearchMatching,
    toggleOpen: toggleSearch,
  } = useOpenMediaQuery(false, theme.breakpoints.down("sm"));

  const {
    isOpened: isMenuOpen,
    setIsOpened: setIsMenuOpen,
    isMatching: isMenuMatching,
    toggleOpen: toggleMenu,
  } = useOpenMediaQuery(false, theme.breakpoints.down("md"));

  const { generateBreadcrumbs } = useBreadcrumbs();
  const crumbs = generateBreadcrumbs();

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
          {crumbs.map((crumb) => (
            <Link
              underline="hover"
              color="inherit"
              href={`${crumb.href}`}
              key={crumb.text}
            >
              {crumb.text}
            </Link>
          ))}
        </Breadcrumbs>

        <Box sx={{ position: "relative", zIndex: "2" }}>
          {isSearchMatching && !detail_id && (
            <SearchIcon onClick={toggleSearch} sx={{ cursor: "pointer" }} />
          )}
          {isMenuMatching && (
            <MenuIcon
              onClick={toggleMenu}
              sx={{ cursor: "pointer", ml: "20px" }}
            />
          )}
        </Box>
      </Box>

      <Box
        sx={{
          height: "100px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h3"
          component="div"
          sx={{ textTransform: "capitalize" }}
        >
          {category}
        </Typography>

        {!isSearchMatching && !detail_id && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextField
              label="Search"
              variant="outlined"
              fullWidth
              color="info"
            />
          </Box>
        )}
      </Box>

      <Drawer
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        anchor="top"
      >
        <MenuList width="100%" />
      </Drawer>
      <Drawer
        open={isOpenedSearch}
        onClose={() => setIsOpenedSearch(false)}
        anchor="top"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "40px 20px",
          }}
        >
          <TextField label="Search" variant="standard" fullWidth color="info" />
          <Button variant="contained" size="small" sx={{ marginLeft: "20px" }}>
            Search
          </Button>
        </Box>
      </Drawer>
    </div>
  );
};
