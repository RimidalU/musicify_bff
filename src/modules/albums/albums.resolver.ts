export const albumsResolver = {
  Query: {
    album: async (_, { id }, { dataSources }) => {
      return dataSources.albumsService.album(id);
    },
    albums: async (_, { limit, offset }, { dataSources }) => {
      return dataSources.albumsService.albums(limit, offset);
    },
  },
  Mutation: {
    createAlbum: async (_, data, { dataSources }) => {
      return dataSources.albumsService.createAlbum(data);
    },
    deleteAlbum: async (_, { id }, { dataSources }) => {
      return dataSources.albumsService.deleteAlbum(id);
    },
    updateAlbum: async (_, data, { dataSources }) => {
      return dataSources.albumsService.updateAlbum(data);
    },
  },

  Album: {
    artists(parent, _, { dataSources }) {
      const artists = parent.artistsIds.map((id) =>
        dataSources.artistsService.artist(id)
      );
      return artists;
    },
    bands(parent, _, { dataSources }) {
      const bands = parent.bandsIds.map((id) =>
        dataSources.bandsService.band(id)
      );
      return bands;
    },
    tracks(parent, _, { dataSources }) {
      const tracks = parent.trackIds.map((id) =>
        dataSources.tracksService.track(id)
      );
      return tracks;
    },
    genres(parent, _, { dataSources }) {
      const genres = parent.genresIds.map((id) =>
        dataSources.genreService.genre(id)
      );
      return genres;
    },
  },
};
