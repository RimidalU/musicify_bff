import 'dotenv/config';
import { RESTDataSource } from 'apollo-datasource-rest';
export let jwtToken = '';

export class JwtService extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = process.env.USERS_URL;
	}

	async logIn(email: string, password: string) {
		const data = await this.post('/login', {
			email,
			password,
		});
		jwtToken = data.jwt;
		return data.jwt;
	}
}
