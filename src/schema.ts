import { gql } from 'apollo-server';

export const typeDefs = gql`
type Query {
  GetAuthor: [Author!]!
}

type Author {
  id: ID!
  name: String!
}
`;