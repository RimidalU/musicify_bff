import { IAlbum, IAlbums } from './IAlbums';
import 'dotenv/config';
import { RESTDataSource } from 'apollo-datasource-rest';
import { jwtToken } from './../jwt/jwt.service.js';

export class AlbumsService extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = process.env.ALBUMS_URL;
	}

	async album(id: string): Promise<Partial<IAlbum>> {
		const data = await this.get(`/${id}`);
		return data;
	}
	async albums(limit = 5, offset = 0): Promise<Partial<IAlbums>> {
		const data = await this.get('', { limit: limit, offset: offset });
		return data.items;
	}

	async createAlbum(data: IAlbum): Promise<Partial<IAlbum>> {
		const response = await this.post('', data, {
			headers: { Authorization: `Bearer ${jwtToken}` },
		});
		return response;
	}
	async deleteAlbum(id: string): Promise<Partial<IAlbum>> {
		const response = await this.delete(`/${id}`, id, {
			headers: { Authorization: `Bearer ${jwtToken}` },
		});
		return response;
	}
	async updateAlbum(data: IAlbum): Promise<Partial<IAlbum>> {
		const requestData = Object.assign({}, data);
		const id = data.id;
		delete requestData.id;
		const response = await this.put(`/${id}`, requestData, {
			headers: { Authorization: `Bearer ${jwtToken}` },
		});
		return response;
	}
}
