export const favouritesResolver = {
	Query: {
		favourites: async (_, __, { dataSources, token }) => {
			return dataSources.favouritesService.favourites(token);
		},
	},
	Mutation: {
		addFavouritesTrack: async (_, { trackId }, { dataSources }) => {
			return dataSources.favouritesService.addFavouritesTrack(trackId);
		},
		addFavouritesArtist: async (_, { artistId }, { dataSources }) => {
			return dataSources.favouritesService.addFavouritesArtist(artistId);
		},
		addFavouritesBand: async (_, { bandId }, { dataSources }) => {
			return dataSources.favouritesService.addFavouritesBand(bandId);
		},
		addFavouritesGenre: async (_, { genreId }, { dataSources }) => {
			return dataSources.favouritesService.addFavouritesGenre(genreId);
		},
	},

	Favourites: {
		tracks(parent, _, { dataSources }) {
			const tracks = parent.tracksIds.map((id) => dataSources.tracksService.track(id));
			return tracks;
		},

		artists(parent, _, { dataSources }) {
			const artists = parent.artistsIds.map((id) => dataSources.artistsService.artist(id));
			return artists;
		},
		bands(parent, _, { dataSources }) {
			const bands = parent.bandsIds.map((id) => dataSources.bandsService.band(id));
			return bands;
		},

		genres(parent, _, { dataSources }) {
			const genres = parent.genresIds.map((id) => dataSources.genreService.genre(id));
			return genres;
		},
	},
};
