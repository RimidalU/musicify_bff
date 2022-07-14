import 'dotenv/config';
import { RESTDataSource } from 'apollo-datasource-rest';

import { IFavourites } from './IFavourites.js';
import { jwtToken } from '../jwt/jwt.service.js';

export class FavouritesService extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = process.env.FAVOURITES_URL;
	}

	async favourites(): Promise<Partial<IFavourites>> {
		const allFavourites = await this.get('/', '', {
			headers: { Authorization: `Bearer ${jwtToken}` },
		});
		return allFavourites;
	}

	async addFavouritesTrack(trackId: string) {
		const newFavourite = await this.put(
			'/add',
			{
				type: 'tracks',
				id: trackId,
			},
			{
				headers: { Authorization: `Bearer ${jwtToken}` },
			},
		);
		return newFavourite;
	}

	async addFavouritesArtist(artistId: string) {
		const newFavourite = await this.put(
			'/add',
			{
				type: 'artists',
				id: artistId,
			},
			{
				headers: { Authorization: `Bearer ${jwtToken}` },
			},
		);
		return newFavourite;
	}

	async addFavouritesBand(bandId: string) {
		const newFavourite = await this.put(
			'/add',
			{
				type: 'bands',
				id: bandId,
			},
			{
				headers: { Authorization: `Bearer ${jwtToken}` },
			},
		);
		return newFavourite;
	}

	async addFavouritesGenre(genreId: string) {
		const newFavourite = await this.put(
			'/add',
			{
				type: 'genres',
				id: genreId,
			},
			{
				headers: { Authorization: `Bearer ${jwtToken}` },
			},
		);
		return newFavourite;
	}
}
