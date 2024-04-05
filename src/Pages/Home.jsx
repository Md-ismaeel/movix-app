import React from 'react'
import { Header } from '../Components/Header'
import { TrendingMovies } from '../Components/TrendingMovies'
import { PopularMovies } from '../Components/PopularMovies'
import { TopRatedMovies } from '../Components/TopRatedMovies'
import { setGenres } from '../Slice/MovieSlice'
import { useDispatch, useSelector } from 'react-redux'

export const Home = () => {

    const genresData = useSelector((state) => state.MovieSlice.genres)
    console.log(genresData);
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <Header />
            <TrendingMovies />
            <PopularMovies />
            <TopRatedMovies />
        </div>
    )
}
