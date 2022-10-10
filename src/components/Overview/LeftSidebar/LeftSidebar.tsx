import {
  List,
  ListItem,
  Drawer,
  Typography,
  Button,
  Link,
} from "@mui/material";
import { useState } from "react";

export const LeftSidebar = () => {
  const [isOpened, setIsOpened] = useState(true);

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
      open
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
