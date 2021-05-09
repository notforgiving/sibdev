export interface Favorite {
  id? :string;
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

export interface saveResult {
  status: number;
  data: {
    message: string;
    status: number;
  };
}

export interface IResult {
  message: string;
  status: number;
}
