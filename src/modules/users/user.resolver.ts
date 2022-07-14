export const userResolver = {
  Query: {
    user: async (_, { id }, { dataSources }) => {
      return dataSources.usersService.getUser(id);
    },
  },
  Mutation: {
    register: async (_, data, { dataSources }) => {
      return dataSources.usersService.register(data);
    },
  },
};
