import { IGenre } from "../genres/IGenres";

export interface IMember {
  id: string;
  firstName: string;
  secondName: string;
  middleName: string;
  instruments: [string];
}

export interface IBand {
  id?: string;
  _id?: string;
  name?: string;
  origin?: string;
  members?: [IMember];
  membersIds?: [string];
  website?: string;
  genres?: [IGenre];
  genresIds?: [string];
}

export interface IBands {
  items: [IBand];
  limit: number;
  offset: number;
  total: number;
}
