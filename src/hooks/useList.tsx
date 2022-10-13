import { useEffect, useState } from "react";
import { ListItem } from "../types";
import { mapListData } from "../utils";

export const useList = (category: string | undefined) => {
  const [list, setList] = useState<ListItem[]>([]);

  const mapListToFormat = (
    data: any,
    category: string | undefined
  ): ListItem[] => {
    return data.results.map((el: any, i: number) => ({
      ...mapListData(el, category),
      id: i + 1, // Cuz there is no ID coming from API
    }));
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/${category}`, {
      method: "GET",
      cache: "force-cache",
    })
      .then((res) => res.json())
      .then((res) => {
        setList(mapListToFormat(res, category));
      })
      .catch((err) => {
        console.error(err);
      });
  }, [category]);

  const mapAndSetList = (data: any, category: string) => {
    setList(mapListToFormat(data, category))
  }

  return {list, mapAndSetList};
};
