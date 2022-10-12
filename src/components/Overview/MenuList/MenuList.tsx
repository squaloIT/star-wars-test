import { Link, List, ListItem, Typography } from "@mui/material";
import { listOfRoutes } from "../../../utils";

export const MenuList = ({ width = ''}: { width: string}) => {
  return (
    <List
      sx={{
        width,
        padding: "0px",
      }}
      component="nav"
      aria-label="mailbox folders"
    >
      {listOfRoutes.map((el) => (
        <ListItem
          button
          key={el}
          sx={{
            borderBottom: "1px solid #1e1e1e",
            padding: "0px",
            width: "100%",
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
  );
};
