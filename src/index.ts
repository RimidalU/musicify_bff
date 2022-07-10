import 'dotenv/config';
import merge from 'lodash.merge';

import { ApolloServer, gql } from 'apollo-server';
import { userSchema } from './modules/users/user.schema.js';
import { jwtSchema } from './modules/jwt/jvt.schema.js';
import { userResolver } from './modules/users/user.resolver.js';
import { jwtResolver } from './modules/jwt/jvt.resolver.js';
import { UsersService } from './modules/users/user.service.js';
import { JwtService } from './modules/jwt/jvt.service.js';

const PORT = process.env.PORT || 3000;

const typeDefs = gql`
	${userSchema}
	${jwtSchema}
`;

const server = new ApolloServer({
	typeDefs,
	resolvers: merge(userResolver, jwtResolver),
	csrfPrevention: true,
	cache: 'bounded',
	context: ({ req }) => {
		const token = req.headers.authorization || '';
		return { token };
	},
	dataSources: () => {
		return {
			usersService: new UsersService(),
			jwtService: new JwtService(),
		};
	},
});

server.listen(PORT).then(({ url }) => {
	console.log(`
    🚀  Server is running!
    🔉  Listening on port ${PORT}
    📭  Query at ${url}
  `);
});
