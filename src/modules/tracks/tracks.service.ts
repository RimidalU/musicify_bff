import 'dotenv/config';
import { ITrack, ITracks } from './ITracks.js';
import { RESTDataSource } from 'apollo-datasource-rest';

export class TracksService extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = process.env.TRACKS_URL;
	}

	willSendRequest(request) {
		if (this.context.token) {
			request.headers.set('Authorization', this.context.token);
		}
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
		const response = await this.post('', data);
		return response;
	}
	async deleteTrack(id: string): Promise<Partial<ITrack>> {
		const response = await this.delete('/' + id);
		return response;
	}
	async updateTrack(data: ITrack): Promise<Partial<ITrack>> {
		const requestData = Object.assign({}, data);
		const id = data.id;
		delete requestData.id;
		const response = await this.put('/' + id, requestData);
		return response;
	}
}
