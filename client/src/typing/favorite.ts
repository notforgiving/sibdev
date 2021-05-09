export interface Favorite {
  number: number;
  name: string;
  sort: number;
  request: string;
}

export interface favoriteDB {
  _id: string;
  text: string;
  name: string;
  sort: string;
  value: number;
  user: string;
  __v: number;
}
