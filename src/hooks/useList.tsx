import { useEffect, useState } from "react";
import { ListItem } from "../types";
import { mapListData } from "../utils";

export const useList = (category: string | undefined) => {
  console.log("🚀 ~ file: useList.tsx ~ line 5 ~ useList ~ category", category)
  const [list, setList] = useState<ListItem[]>([]);

  const mapListToFormat = (
    data: any,
    category: string | undefined
  ): ListItem[] => {
    return data.results.map((el: any) => mapListData(el, category));
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/${category}`, {
      method: "GET",
      cache: "force-cache"
    })
      .then((res) => res.json())
      .then((res) => {
        setList(mapListToFormat(res, category));
      })
      .catch((err) => {
        console.error(err);
      });
  }, [category]);

  return list;
};
