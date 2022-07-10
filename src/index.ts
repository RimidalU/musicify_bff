import 'dotenv/config';
import merge from 'lodash.merge';

import { ApolloServer, gql } from 'apollo-server';
import { userSchema } from './modules/users/user.schema.js';
import { jwtSchema } from './modules/jwt/jwt.schema.js';
import { genresSchema } from './modules/genres/genres.schema.js';

import { userResolver } from './modules/users/user.resolver.js';
import { jwtResolver } from './modules/jwt/jwt.resolver.js';
import { genreResolver } from './modules/genres/genres.resolver.js';

import { UsersService } from './modules/users/user.service.js';
import { GenreService } from './modules/genres/genres.service.js';
import { JwtService } from './modules/jwt/jwt.service.js';

const PORT = process.env.PORT || 3000;

const typeDefs = gql`
	${userSchema}
	${jwtSchema}
	${genresSchema}
`;

const server = new ApolloServer({
	typeDefs,
	resolvers: merge(userResolver, jwtResolver, genreResolver),
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
			genreService: new GenreService(),
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
