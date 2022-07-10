import 'dotenv/config';
import merge from 'lodash.merge';

import { ApolloServer, gql } from 'apollo-server';
import { userSchema } from './modules/users/user.schema.js';
import { userResolver } from './modules/users/user.resolver.js';
import { UsersService } from './modules/users/user.service.js';

const PORT = process.env.PORT || 3000;

const typeDefs = gql`
	${userSchema}
`;

const server = new ApolloServer({
	typeDefs,
	resolvers: merge(userResolver),
	dataSources: () => {
		return {
			usersService: new UsersService(),
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
