import 'dotenv/config';
import { Artist, Artists } from './IArtist.js';
import { RESTDataSource } from 'apollo-datasource-rest';

export class ArtistService extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = process.env.ARTISTS_URL;
	}

	isAuthorization(request) {
		if (this.context.token) {
			request.headers.set('Authorization', this.context.token);
		}
	}

	async artist(id: string): Promise<Partial<Artist>> {
		const data = await this.get(`/${id}`);
		return data;
	}
	async artists(limit = 5, offset = 0): Promise<Partial<Artists>> {
		const data = await this.get('', { limit: limit, offset: offset });
		return data.items;
	}

	async createArtist(data: Artist): Promise<Partial<Artist>> {
		const response = await this.post('', data);
		return response;
	}
	async deleteArtist(id: string): Promise<Partial<Artist>> {
		const response = await this.delete('/' + id);
		return response;
	}
	async updateArtist(data: Artist): Promise<Partial<Artist>> {
		const requestData = Object.assign({}, data);
		const id = data.id;
		delete requestData.id;
		const response = await this.put('/' + id, requestData);
		return response;
	}
}
