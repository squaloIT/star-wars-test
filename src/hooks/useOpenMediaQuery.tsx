import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import { useEffect, useState } from "react";

export const useOpenMediaQuery = (isInitiallyOpened: boolean) => {
  const theme = useTheme();
  const isMatching = useMediaQuery(theme.breakpoints.down("md"));
  const [isOpened, setIsOpened] = useState(isInitiallyOpened);

  return { isOpened, setIsOpened, isMatching};
};
