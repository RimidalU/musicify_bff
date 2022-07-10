import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema.js';

const PORT = process.env.PORT || 3000;

const server = new ApolloServer({ typeDefs });

server.listen(PORT).then(() => {
	console.log(`
    🚀  Server is running!
    🔉  Listening on port ${PORT}
    📭  Query at https://studio.apollographql.com/dev
  `);
});
