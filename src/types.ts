export type ListItem = {
  id: number;
  title: string;
  subtitle: string;
  body: string;
};

export type UserCredentials = {
  username: string;
  password: string;
};

export type MainCategoryInfo = {
  title: string;
  subtitle: string;
  body: string;
}

export type Crumb = {
  href: string; 
  text: string | undefined;
}