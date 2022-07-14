import 'dotenv/config';
import { IGenre, IGenres } from './IGenres.js';
import { RESTDataSource } from 'apollo-datasource-rest';

export class GenreService extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = process.env.GENRES_URL;
	}

	willSendRequest(request) {
		if (this.context.token) {
			request.headers.set('Authorization', this.context.token);
		}
	}

	async genre(id: string): Promise<Partial<IGenre>> {
		const data = await this.get(`/${id}`);
		return data;
	}
	async genres(limit = 5, offset = 0): Promise<Partial<IGenres>> {
		const data = await this.get('', { limit: limit, offset: offset });
		return data.items;
	}
	async createGenre(data: IGenre): Promise<Partial<IGenre>> {
		const response = await this.post('', data);
		return response;
	}
	async deleteGenre(id: string): Promise<Partial<IGenre>> {
		const response = await this.delete('/' + id);
		return response;
	}
	async updateGenre(data: IGenre): Promise<Partial<IGenre>> {
		const requestData = Object.assign({}, data);
		const id = data.id;
		delete requestData.id;
		const response = await this.put('/' + id, requestData);
		return response;
	}
}
