export const genreResolver = {
  Query: {
    genres: async (_, { limit, offset }, { dataSources }) => {
      return dataSources.GenreService.genres(limit, offset);
    },
    genre: async (_, { id }, { dataSources }) => {
      return dataSources.GenreService.genre(id);
    },
  },
  Mutation: {
    createGenre: async (_, data, { dataSources }) => {
      return dataSources.genreService.createGenre(data);
    },
    deleteGenre: async (_, { id }, { dataSources }) => {
      return dataSources.genreService.deleteGenre(id);
    },
    updateGenre: async (_, data, { dataSources }) => {
      return dataSources.genreService.updateGenre(data);
    },
  },
};
