export const bandSchema = `
type Query {
  band(id: String!): Band
  bands(limit: Int, offset:Int): [Band]
}

type Mutation {

  createBand(
    name: String!, 
    origin: String, 
    members: [inputMember], 
    website: String, 
    genresIds:[String]
    ): Band

  deleteBand(id: String!): isDeleteResponse

  updateBand(
    id: String!, 
    name: String!, 
    origin: String, 
    members: [inputMember], 
    website: String, 
    genresIds:[String]
    ): Band
}

}

type Band {
  _id: ID!
  name: String
  origin: String
  website: String
  members: [Member]
  genres: [Genre]
}

type Member {
  artist: Artist
  instrument: String
  years: [Int]
}

input inputMember {
  artistId: String
  instrument: String
  years: [Int]
}

`;
