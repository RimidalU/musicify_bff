import 'dotenv/config';
import { IBand, IBands } from './IBands.js';
import { jwtToken } from './../jwt/jwt.service.js';
import { RESTDataSource } from 'apollo-datasource-rest';

export class BandsService extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = process.env.BANDS_URL;
	}

	async band(id: string): Promise<Partial<IBand>> {
		const data = await this.get(`/${id}`);
		return data;
	}

	async bands(limit = 5, offset = 0): Promise<Partial<IBands>> {
		const data = await this.get('', { limit: limit, offset: offset });
		return data.items;
	}

	async createBand(data): Promise<Partial<IBand>> {
		const addMembers = () => {
			return data.artist.map((member) => {
				return {
					artist: member.artistId,
					instrument: member.instrument,
					years: member.years,
				};
			});
		};
		const response = await this.post(
			'',
			{
				name: data.name,
				origin: data.origin,
				members: addMembers,
				website: data.website,
				genresIds: data.genresIds,
			},
			{
				headers: { Authorization: `Bearer ${jwtToken}` },
			},
		);
		return response;
	}

	async deleteBand(id: string): Promise<Partial<IBand>> {
		const response = await this.delete(`/${id}`, id, {
			headers: { Authorization: `Bearer ${jwtToken}` },
		});
		return response;
	}
	async updateBand(data: IBand): Promise<Partial<IBand>> {
		const requestData = Object.assign({}, data);
		const id = data.id;
		delete requestData.id;
		const response = await this.put(`/${id}`, requestData, {
			headers: { Authorization: `Bearer ${jwtToken}` },
		});
		return response;
	}
}
