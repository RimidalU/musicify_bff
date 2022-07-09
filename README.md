# BFF for Musicify

BFF(Backend for Frontend) for Musicify. Implemented in Apollo GraphQL.

## Installation Microservices

```
git clone https://github.com/rolling-scopes-school/node-graphql-service
```

`read README.md file!`

## Installation app

```
git clone https://github.com/RimidalU/musicify_bff
cd musicify_bff
git checkout dev
npm install
```

- rename env.example to .env

```
npm start
```

## Apollo Studio

- The server start on PORT 3000 (you can change this in .env file).
- URL Playground: http://localhost:PORT/graphql.
- Use https://studio.apollographql.com/ or Postman (additional tool)

## Started

- Register a new user
- Log in

## Usage

Send query/mutations to GraphQL Service using GraphQL syntax.
Note: Authorization for all mutations except register.
Note: Query favourites available only for logged-in user.

## Queries

<details>
  <summary><strong>Queries list</strong></summary>
    <ul>
    <li>user</li>
    <li>jwt</li>
    <li>favourites </li>
    <li>artist</li>
    <li>artists</li>
    <li>band</li>
    <li>bands</li>
    <li>album</li>
    <li>albums</li>
    <li>genre</li>
    <li>genres</li>
    <li>track</li>
    <li>tracks</li>
    </ul>
</details>

<details>
  <summary><strong>Mutations list</strong></summary>
    <ul>   
    <li>favourites </li>
      <em>addTrackToFavourites / addBandToFavourites / addArtistToFavourites /addGenreToFavourites </em>
    <li>artist</li>
      <em>createArtist / deleteArtist / updateArtist</em>
    <li>band</li>
      <em>createBand / deleteBand / updateBand</em>
    <li>album</li>
      <em>createAlbum / deleteAlbum / updateAlbum</em>
    <li>genre</li>
      <em>createGenre / deleteGenre / updateGenre</em>
    <li>track</li>
      <em>createTrack / deleteTrack / updateTrack</em>
    <li>user</li>
      <em>register</em>
    </ul> 
</details>
