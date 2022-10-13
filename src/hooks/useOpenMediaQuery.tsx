import { useMediaQuery } from "@mui/material";
import { useState } from "react";

export const useOpenMediaQuery = (isInitiallyOpened: boolean, breakpoint = '@media (max-width:899.95px)') => {
  const isMatching = useMediaQuery(breakpoint);
  const [isOpened, setIsOpened] = useState(isInitiallyOpened);
  const toggleOpen = () => {
    setIsOpened(prevVal => !prevVal)
  }
  return { isOpened, setIsOpened, toggleOpen, isMatching};
};
