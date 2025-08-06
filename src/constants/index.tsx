export const baseUrl = 'https://open.spotify.com';

export const baseAPIUrl = 'https://api.spotify.com/'

export const baseAlbumUrl = "https://api.spotify.com/v1/albums"

export const baseArtistUrl = 'https://api.spotify.com/v1/artists'

export const baseGenreUrl = 'https://api.spotify.com/v1/recommendations/available-genre-seeds'

export const baseMarketUrl = 'https://api.spotify.com/v1/markets'

export const basePlaylistUrl = 'https://api.spotify.com/v1/playlists'

export const baseCategoryUrl = 'https://api.spotify.com/v1/browse/categories'

export const baseRecommendationUrl = 'https://api.spotify.com/v1/recommendations'

export const baseShowUrl = "https://api.spotify.com/v1/shows";

export const baseTrackUrl = "https://api.spotify.com/v1/tracks";

export const baseAudioFeaturesUrl = "https://api.spotify.com/v1/audio-features";

export const baseAudioAnalysisUrl = "https://api.spotify.com/v1/audio-analysis";

// const albumRoutes = express.Router();
// albumRoutes.get("/:id", getSingleAlbum);
// albumRoutes.get("/", getMultipleAlbumsHandler);
// albumRoutes.get("/tracks/:id", getAlbumTracksHandler);

// const artistRoutes = express.Router();
// artistRoutes.get("/:id", getArtistHandler);
// artistRoutes.get("/", getMultipleArtistsHandler);
// artistRoutes.get("/tracks/:id", getArtistTopTracksHandler);
// artistRoutes.get("/albums/:id", getArtistsAlbumsHandler);
// artistRoutes.get("/relatedartists/:id", getRelatedArtistHandler);

// const playlistRoutes = express.Router();
// playlistRoutes.get("/:id", getPlaylistHandler);
// playlistRoutes.get("/item/:id", getPlaylistItemHandler);
// playlistRoutes.get("/user/:username", getUserPlaylistHandler);
// playlistRoutes.get("/featured/:id", getFeaturedPlaylistHandler);
// playlistRoutes.get("/category/:id", getCategoryPlaylistHandler);
// playlistRoutes.get("/image/:id", getPlaylistImageHandler);

// const showRoutes = express.Router();
// showRoutes.get("/:id", getShowHandler);
// showRoutes.get("/", getMultipleShowsHandler);
// showRoutes.get("/episode/:id", getShowsEpisodesHandler);

// const trackRoutes = express.Router();
// trackRoutes.get("/:id", getTrackHandler);
// trackRoutes.get("/", getMultipleTracksHandler);
// trackRoutes.get("/audio-features/:id", getTracksAudioFeaturesHandler);
// trackRoutes.get("/audio-features", getMultipleTracksAudioFeaturesHandler);
// trackRoutes.get("/audio-analysis/:id", getTracksAudioAnalysisHandler);

// app.use("/api/albums", albumRoutes);
// app.use("/api/artists", artistRoutes);
// app.use("/api/playlists", playlistRoutes);
// app.use("/api/shows", showRoutes);
// app.use("/api/tracks", trackRoutes);

// app.get("/api/recommendations", getRecommendationsHandler);
// app.get("/api/get-genre", getGenreHandler);
// app.get("/api/market", getMarketHandler);

// app.get("/", handleHomePage);

// app.use("*", handleException);