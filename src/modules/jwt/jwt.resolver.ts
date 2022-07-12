export const jwtResolver = {
  Query: {
    jwt: async (_, { email, password }, { dataSources }) => {
      return dataSources.jwtService.logIn(email, password);
    },
  },
};
