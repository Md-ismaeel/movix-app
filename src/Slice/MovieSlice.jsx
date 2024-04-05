import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movie: [],
    tvShows: [],
    trending: [],
    popular: [],
    topRated: [],
    genres: []
};

const MovieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovie: (state, action) => {
            state.movie = action.payload;
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
        }
    },
});

export const { setMovie, SetTrending, setPopular, setTopRated, setGenres } = MovieSlice.actions;
export default MovieSlice.reducer;
