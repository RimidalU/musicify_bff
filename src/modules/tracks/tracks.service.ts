import 'dotenv/config';
import { ITrack, ITracks } from './ITracks.js';
import { RESTDataSource } from 'apollo-datasource-rest';
import { jwtToken } from './../jwt/jwt.service.js';

export class TracksService extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = process.env.TRACKS_URL;
	}

	async tracks(limit = 5, offset = 0): Promise<Partial<ITracks>> {
		const data = await this.get('', { limit: limit, offset: offset });
		return data.items;
	}
	async track(id: string): Promise<Partial<ITrack>> {
		const data = await this.get(`/${id}`);
		return data;
	}
	async createTrack(data: ITrack): Promise<Partial<ITrack>> {
		const response = await this.post('', data, {
			headers: { Authorization: `Bearer ${jwtToken}` },
		});
		return response;
	}
	async deleteTrack(id: string): Promise<Partial<ITrack>> {
		const response = await this.delete(`/${id}`, id, {
			headers: { Authorization: `Bearer ${jwtToken}` },
		});
		return response;
	}
	async updateTrack(data: ITrack): Promise<Partial<ITrack>> {
		const requestData = Object.assign({}, data);
		const id = data.id;
		delete requestData.id;
		const response = await this.put(`/${id}`, requestData, {
			headers: { Authorization: `Bearer ${jwtToken}` },
		});
		return response;
	}
}
