import { IBand } from './../bands/IBands';
import { IArtist } from './../artists/IArtist';
import { ITrack } from './../tracks/ITracks';
import { IGenre } from '../genres/IGenres';

export interface IAlbum {
	id?: string;
	_id?: string;
	name?: string;
	released?: number;
	artists?: [IArtist];
	artistsIds?: [string];
	bands?: [IBand];
	bandsIds?: [string];
	tracks?: [ITrack];
	trackIds?: [string];
	genres?: [IGenre];
	genresIds?: [string];
	image?: string;
}

export interface IAlbums {
	items: [IAlbum];
	limit: number;
	offset: number;
	total: number;
}
