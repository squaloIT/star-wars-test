import { MainCategoryInfo } from "../types";

export const didUserLoggedThisMonth = (): boolean => {
  const ls = localStorage.getItem(String(process.env.REACT_APP_LOGIN_DATE));
  if (ls === null) {
    return false;
  }
  const timestamp = Number(ls);
  const timestampNow = new Date().getTime();
  return timestampNow - timestamp <= 1000 * 60 * 60 * 25 * 30;
};

export const mapListData = (
  el: any,
  category: string | undefined
): MainCategoryInfo | undefined => {
  if (category === "species") {
    return {
      title: el.name,
      subtitle: el.classification,
      body: `Language: ${el.language}, Average Height: ${el.average_height}, Average lifespan: ${el.average_lifespan}`,
    };
  }

  if (category === "starships") {
    return {
      title: el.name,
      subtitle: `${el.model} - ${el.starship_class}`,
      body: `Num of passengers: ${el.passengers}, Max speed: ${el.max_atmosphering_speed}, Manufacturer: ${el.manufacturer}`,
    };
  }

  if (category === "films") {
    return {
      title: el.title,
      subtitle: el.director,
      body: el.producer,
    };
  }
  if (category === "people") {
    return {
      title: el.name,
      subtitle: `Birth year: ${el.birth_year}`,
      body: `Hair color: ${el.hair_color}; Skin: ${el.skin_color}`,
    };
  }
  if (category === "vehicles") {
    return {
      title: el.name,
      subtitle: el.model,
      body: el.manufacturer,
    };
  }
  if (category === "planets") {
    return {
      title: el.name,
      subtitle: el.terrain,
      body: `${el.climate}`,
    };
  }
};

export const listOfRoutes = [
  "Planets",
  "Starships",
  "People",
  "Vehicles",
  "Films",
  "Species",
];

export const mapLessImportantData = (res: any, data: any) => {
  const info: any = {};
  const keys = Object.keys(res).filter((key) => {
    return (
      res[key] != data.title &&
      res[key] != data.subtitle &&
      data.body?.indexOf(key) == -1 &&
      !Array.isArray(res[key]) &&
      // res[key].indexOf("https") == -1 &&
      key != "created" &&
      key != "edited"
    );
  });

  keys.forEach((key) => {
    info[key] = res[key];
  });

  return info;
};
