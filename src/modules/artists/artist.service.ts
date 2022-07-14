import 'dotenv/config';
import { IArtist, IArtists } from './IArtist.js';
import { RESTDataSource } from 'apollo-datasource-rest';
import { jwtToken } from './../jwt/jwt.service.js';

export class ArtistService extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = process.env.ARTISTS_URL;
	}

	async artist(id: string): Promise<Partial<IArtist>> {
		const data = await this.get(`/${id}`);
		return data;
	}
	async artists(limit = 5, offset = 0): Promise<Partial<IArtists>> {
		const data = await this.get('', { limit: limit, offset: offset });
		return data.items;
	}

	async createArtist(data: IArtist): Promise<Partial<IArtist>> {
		const response = await this.post('', data, {
			headers: { Authorization: `Bearer ${jwtToken}` },
		});
		return response;
	}
	async deleteArtist(id: string): Promise<Partial<IArtist>> {
		const response = await this.delete(`/${id}`, id, {
			headers: { Authorization: `Bearer ${jwtToken}` },
		});
		return response;
	}
	async updateArtist(data: IArtist): Promise<Partial<IArtist>> {
		const requestData = Object.assign({}, data);
		const id = data.id;
		delete requestData.id;
		const response = await this.put(`/${id}`, requestData, {
			headers: { Authorization: `Bearer ${jwtToken}` },
		});
		return response;
	}
}
