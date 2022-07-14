export const userSchema = `
type Query {
  user(id: ID!): User
}

type Mutation {
  register(
    firstName: String!
    lastName: String!
    password: String!
    email: String!
  ): User
}

type User {
  _id: ID!
  firstName: String
  lastName: String
  password: String
  email: String!
}
`;
