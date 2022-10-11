import {
  List,
  ListItem,
  Drawer,
  Typography,
  Link,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";

export const LeftSidebar = () => {
  const [isOpened, setIsOpened] = useState(true);
  const theme = useTheme();
  const isLessThanMD = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    setIsOpened(!isLessThanMD)
  }, [isLessThanMD]);

  const list = [
    "Planets",
    "Starships",
    "People",
    "Vehicles",
    "Films",
    "Species",
  ];
  return (
    <Drawer
      open={isOpened}
      variant="persistent"
      sx={{
        backgroundColor: "whitesmoke",
        // width: '15%'
        position: "relative",
      }}
    >
      <List
        sx={{
          // width: "100%",
          padding: "0px",
        }}
        component="nav"
        aria-label="mailbox folders"
      >
        {list.map((el) => (
          <ListItem
            button
            sx={{
              borderBottom: "1px solid #1e1e1e",
              padding: "0px",
              width: "250px",
            }}
          >
            <Link
              href={`/overview/${el.toLowerCase()}`}
              underline="none"
              sx={{
                color: "#FFF",
                width: "100%",
                padding: "8px 16px",
                "&:hover": {
                  backgroundColor: "#1e1e1e",
                  color: "#FFE81F",
                  opacity: [0.8],
                },
              }}
            >
              <Typography variant="h6" component="div">
                {el}
              </Typography>
            </Link>
          </ListItem>
        ))}
      </List>

      {/* <Button sx={{ position: "absolute", bottom: "20px", right: "20px" }}>
        Close
      </Button> */}
    </Drawer>
  );
};
