import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movie: [],
    tvShows: [],
    trending: [],
    popular: [],
    topRated: [],
    genres: [],
    movieDetail: {},
    credits: []
};

const MovieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovie: (state, action) => {
            state.movie = action.payload;
        },
        setTvShows: (state, action) => {
            state.tvShows = action.payload;
        },
        SetTrending: (state, action) => {
            state.trending = action.payload;
        },
        setPopular: (state, action) => {
            state.popular = action.payload;
        },
        setTopRated: (state, action) => {
            state.topRated = action.payload
        },
        setGenres: (state, action) => {
            state.genres = action.payload
        },
        setMovieDetails: (state, action) => {
            state.movieDetail = action.payload;
        },
        setCredits: (state, action) => {
            state.credits = action.payload
        }
    },
});

export const { setMovie, setTvShows, SetTrending, setPopular, setTopRated, setGenres, setMovieDetails, setCredits } = MovieSlice.actions;
export default MovieSlice.reducer;
