export interface ITrack {
  id?: string;
  _id?: string;
  title?: string;
  album?: string;
  albumId?: string;
  artists?: [object];
  artistsIds: [string];
  bands: [object];
  bandsIds: [string];
  duration: number;
  released: number;
  genres: [object];
  genresIds: [string];
}

export interface ITracks {
  items: [ITrack];
  limit: number;
  offset: number;
  total: number;
}
