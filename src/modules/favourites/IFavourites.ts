import { IGenre } from './../genres/IGenres';
import { IArtist } from './../artists/IArtist';
import { IBand } from './../bands/IBands';
import { ITrack } from './../tracks/ITracks';

export interface IFavourites {
	id?: string;
	_id?: string;
	userId?: string;
	bands?: [IBand];
	bandsIds?: [string];
	genres?: [IGenre];
	genresIds?: [string];
	artists?: [IArtist];
	artistsIds?: [string];
	tracks?: [ITrack];
	tracksIds?: [string];
}
