import { useParams } from "react-router-dom";
import { Crumb } from "../types";

export const useBreadcrumbs = () => {
  const params = useParams();

  function generateBreadcrumbs(): Crumb[]  {
    const parts = Object.keys(params).map((key) => params[key]);

    const crumblist = parts.map((text, idx) => {
      const href = "/overview/" + parts.slice(0, idx + 1).join("/");
      return { href, text };
    })

    return [...crumblist];
  }

  return { generateBreadcrumbs };
};
