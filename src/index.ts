import 'dotenv/config';
import merge from 'lodash.merge';
import { ApolloServer, gql } from 'apollo-server';

import { userSchema } from './modules/users/user.schema.js';
import { jwtSchema } from './modules/jwt/jwt.schema.js';
import { genresSchema } from './modules/genres/genres.schema.js';
import { artistSchema } from './modules/artists/artist.schema.js';
import { bandSchema } from './modules/bands/bands.schema.js';
import { albumsSchema } from './modules/albums/albums.schema.js';
import { tracksSchema } from './modules/tracks/tracks.schema.js';

import { userResolver } from './modules/users/user.resolver.js';
import { jwtResolver } from './modules/jwt/jwt.resolver.js';
import { genreResolver } from './modules/genres/genres.resolver.js';
import { artistResolver } from './modules/artists/artist.resolver.js';
import { bandsResolver } from './modules/bands/bands.resolver.js';
import { albumsResolver } from './modules/albums/albums.resolver.js';
import { tracksResolver } from './modules/tracks/tracks.resolver.js';

import { UsersService } from './modules/users/user.service.js';
import { GenreService } from './modules/genres/genres.service.js';
import { JwtService } from './modules/jwt/jwt.service.js';
import { ArtistService } from './modules/artists/artist.service.js';
import { BandsService } from './modules/bands/bands.service.js';
import { AlbumsService } from './modules/albums/albums.service.js';
import { TracksService } from './modules/tracks/tracks.service.js';

const PORT = process.env.PORT || 3000;

const typeDefs = gql`
	${userSchema}
	${jwtSchema}
	${genresSchema}
	${artistSchema}
	${bandSchema}
	${albumsSchema}
	${tracksSchema}
`;

const server = new ApolloServer({
	typeDefs,
	resolvers: merge(
		userResolver,
		jwtResolver,
		genreResolver,
		artistResolver,
		bandsResolver,
		albumsResolver,
		tracksResolver,
	),

	dataSources: () => {
		return {
			usersService: new UsersService(),
			jwtService: new JwtService(),
			genreService: new GenreService(),
			artistService: new ArtistService(),
			bandsService: new BandsService(),
			albumsService: new AlbumsService(),
			tracksService: new TracksService(),
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
