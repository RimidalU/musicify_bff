import 'dotenv/config';
// import { Ijwt } from './IJwt';
import { RESTDataSource } from 'apollo-datasource-rest';

export class JwtService extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = process.env.USERS_URL;
	}
	async logIn(email: string, password: string) {
		const data = await this.post('login', {
			email,
			password,
		});
		console.log(data);

		return data.jwt;
	}
}
