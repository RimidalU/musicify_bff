import 'dotenv/config';
import { Band, Bands } from './IBands.js';
import { RESTDataSource } from 'apollo-datasource-rest';

export class BandsService extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = process.env.BANDS_URL;
	}

	isAuthorization(request) {
		if (this.context.token) {
			request.headers.set('Authorization', this.context.token);
		}
	}

	async band(id: string): Promise<Partial<Band>> {
		const data = await this.get(`/${id}`);
		return data;
	}
	async createBand(data): Promise<Partial<Bands>> {
		const addMembers = () => {
			return data.artist.map((member) => {
				return {
					artist: member.artistId,
					instrument: member.instrument,
					years: member.years,
				};
			});
		};
		const response = await this.post('', {
			name: data.name,
			origin: data.origin,
			members: addMembers,
			website: data.website,
			genresIds: data.genresIds,
		});
		return response;
	}
	async bands(limit = 5, offset = 0) {
		const data = await this.get('', { limit: limit, offset: offset });
		return data.items;
	}

	async deleteBand(id: string): Promise<Partial<Band>> {
		const response = await this.delete('/' + id);
		return response;
	}
	async updateBand(data: Band): Promise<Partial<Band>> {
		const requestData = Object.assign({}, data);
		const id = data.id;
		delete requestData.id;
		const response = await this.put('/' + id, requestData);
		return response;
	}
}
