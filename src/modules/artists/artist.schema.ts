export const artistSchema = `
type Query {
  artist(id: String!): Artist

  artists(
    limit: Int
    offset: Int
  ): [Artist]
}

type Mutation {

  createArtist(
    firstName: String!
    secondName: String!  
    country: String!
    middleName: String
    birthDate: String
    birthPlace: String
    bandsIds: [String]
    instruments: [String]
  ): Artist

  deleteArtist(id: String!): isDeleteResponse

  updateArtist(
    id: String! 
    firstName: String
    secondName: String
    country: String
    middleName: String
    birthDate: String
    birthPlace: String 
    bandsIds: [String]
    instruments: [String]
  ): Artist 
}

type Artist {
  _id: ID!
  firstName: String
  secondName: String
  middleName: String
  birthDate: String
  birthPlace: String
  country: String
  bands: [Band]
  instruments: [String]
}
`;
