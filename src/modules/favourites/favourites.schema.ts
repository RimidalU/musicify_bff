export const favouritesSchema = `
type Query {
  favourites: Favourites
}

type Mutation {

  addFavouritesTrack(trackId: ID!): Favourites
  addFavouritesArtist(artistId: ID!): Favourites
  addFavouritesBand(bandId: ID!): Favourites
  addFavouritesGenre(genreId: ID!): Favourites

}

type Favourites {
  _id: ID!
  userId: ID!
  bands: [Band]
  genres: [Genre]
  artists: [Artist]
  tracks: [Track]
}

`;
