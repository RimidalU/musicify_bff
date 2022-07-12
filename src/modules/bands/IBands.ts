import { IGenre } from "../genres/IGenres";

export interface Member {
  id: string;
  firstName: string;
  secondName: string;
  middleName: string;
  instruments: [string];
}

export interface Band {
  id?: string;
  _id?: string;
  name?: string;
  origin?: string;
  members?: [Member];
  membersIds?: [string];
  website?: string;
  genres?: [IGenre];
  genresIds?: [string];
}

export interface Bands {
  items: [Band];
  limit: number;
  offset: number;
  total: number;
}
