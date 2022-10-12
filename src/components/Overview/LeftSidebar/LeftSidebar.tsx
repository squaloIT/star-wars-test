import {
  Drawer,
} from "@mui/material";
import { useEffect } from "react";
import { useOpenMediaQuery } from "../../../hooks/useOpenMediaQuery";
import { MenuList } from "../MenuList/MenuList";

export const LeftSidebar = () => {
  const { isOpened, setIsOpened, isMatching } = useOpenMediaQuery(true)

  useEffect(() => {
    setIsOpened(!isMatching);
  }, [isMatching]);

  return (
    <Drawer
      open={isOpened}
      variant="persistent"
      sx={{
        position: "relative",
      }}
    >
      <MenuList width='250px' />
    </Drawer>
  );
};
