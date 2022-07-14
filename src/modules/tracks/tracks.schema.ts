export const tracksSchema = `
type Query {
  track(id: String!): Track

  tracks(
    limit: Int
    offset: Int
  ): [Track]
}

type Mutation {

  createTrack(
    title: String!
    albumIds: [String]
    bandsIds: [String]
    artistIds: [String]
    duration: Int 
    released: Int
    genresIds: [String]
  ): Track

  deleteTrack(id: String!): isDeleteResponse

  updateTrack(
    id: String 
    title: String
    albumIds: [String]
    bandsIds: [String]
    artistIds: [String]
    duration: Int
    released: Int
    genresIds: [String]
  ): Track

  }

type Track {
  _id: ID!
  title: String
  album: Album
  artists: [Artist]
  bands: [Band]
  duration: Int
  released: Int
  genres: [Genre]
}    
`;
