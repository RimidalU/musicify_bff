export const bandsResolver = {
	Query: {
		band: async (_, { id }, { dataSources }) => {
			return dataSources.bandsService.band(id);
		},
		bands: async (_, { limit, offset }, { dataSources }) => {
			return dataSources.bandsService.bands(limit, offset);
		},
	},
	Mutation: {
		createBand: async (_, data, { dataSources }) => {
			return dataSources.bandsService.createBand(data);
		},
		deleteBand: async (_, { id }, { dataSources }) => {
			return dataSources.bandsService.deleteBand(id);
		},
		updateBand: async (_, data, { dataSources }) => {
			return dataSources.bandsService.updateBand(data);
		},
	},

	Band: {
		async genres(parent, _, { dataSources }) {
			const genres = await parent.genresIds.map((id) => dataSources.genreService.genre(id));
			return genres;
		},
	},

	Member: {
		async artist(parent, _, { dataSources }) {
			const artist = await dataSources.artistService.artist(parent.artist);
			return artist;
		},
	},
};
