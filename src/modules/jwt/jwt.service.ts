import 'dotenv/config';
// import { Ijwt } from './IJwt';
import { RESTDataSource } from 'apollo-datasource-rest';
export let jwtToken = '';

export class JwtService extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = process.env.USERS_URL;
	}

	// willSendRequest(request) {
	// 	if (this.context.token) {
	// 		request.headers.set('Authorization', this.context.token);
	// 	}
	// }
	async logIn(email: string, password: string) {
		const data = await this.post('/login', {
			email,
			password,
		});
		console.log(`data.jwt ${data.jwt}`);
		jwtToken = data.jwt;
		return data.jwt;
	}
}
