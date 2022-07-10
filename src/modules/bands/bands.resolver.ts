export const bandsResolver = {
	Query: {
		artist: async (_, { id }, { dataSources }) => {
			return dataSources.artistsService.artist(id);
		},
		artists: async (_, { limit, offset }, { dataSources }) => {
			return dataSources.artistsService.artists(limit, offset);
		},
	},
	Mutation: {
		createArtist: async (_, data, { dataSources }) => {
			return dataSources.artistsService.createArtist(data);
		},
		deleteArtist: async (_, { id }, { dataSources }) => {
			return dataSources.artistsService.deleteArtist(id);
		},
		updateArtist: async (_, data, { dataSources }) => {
			return dataSources.artistsService.updateArtist(data);
		},
	},

	Artist: {
		bands(parent, _, { dataSources }) {
			const band = parent.bandsIds.map((id) => dataSources.bandsService.band(id));
			return band;
		},
	},
};
