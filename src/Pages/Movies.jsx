import React, { useEffect, useState } from 'react'
import MovieCard from '../Components/MovieCard'
import { useSelector, useDispatch } from 'react-redux'
import { fetchApi } from '../utils/api'
import { setMovie } from '../Slice/MovieSlice'
import Skeleton from 'react-loading-skeleton'
import { NavLink } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component';
import Select from 'react-select';
import { setGenres } from '../Slice/MovieSlice'



export const Movies = () => {

    const { movie, genres } = useSelector((state) => state.MovieSlice)
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [selectedOption, setSelectedOption] = useState(null);

    const FetchData = async () => {
        setIsLoading(true)
        const response = await fetchApi(`https://api.themoviedb.org/3/discover/movie`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
                },
            })
        dispatch(setMovie(response.data.results))
        setIsLoading(false)
    }


    async function fetchMoviePerPage() {
        const data = await fetchApi(
            `https://api.themoviedb.org/3/discover/movie?page=${page}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
                },
            }
        );
        const newMovie = [...movie, ...data.data.results];
        dispatch(setMovie(newMovie));
        setPage((prev) => prev + 1);
        setTotalPage(data.data.total_pages);
    }

    useEffect(() => {
        fetchMoviePerPage();
        FetchData();
    }, []);


    async function fetchGenres() {
        const data = await fetchApi(
            `https://api.themoviedb.org/3/genre/movie/list`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
                },
            }
        );

        const filteredData = data.data.genres.map((item) => {
            return {
                value: item.id,
                label: item.name,
            };
        });

        dispatch(setGenres(filteredData));
    }

    useEffect(() => {

        fetchGenres();
    }, []);



    async function fetchFilteredMovie() {
        let params = "";
        if (selectedOption.length > 0) {
            selectedOption.forEach((item) => {
                params += item.value + ",";
            });
        }

        const data = await fetchApi(
            `https://api.themoviedb.org/3/discover/movie?with_genres=${params}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
                },
            }
        );
        dispatch(setMovie(data.data.results));
        setTotalPage(data.data.total_pages);
    }

    useEffect(() => {
        if (selectedOption) {
            fetchFilteredMovie();
        }
    }, [selectedOption]);

    // console.log(genres);
    return (
        <div className='w-full flex flex-col justify-center py-4 px-6'>

            <div className='w-full flex justify-between items-center mt-4 mb-1 px-3'>
                <h1 className='w-2/12 text-2xl text-white'>Explore Movies</h1>
                <div className='w-2/3 flex justify-end items-center gap-4'>

                    <Select
                        className='bg-search-bar h-10 w-2/6 rounded-full outline-none'
                        type='text' value={selectedOption}
                        onChange={(e) => { setSelectedOption(e) }}
                        isMulti
                        options={genres}>
                    </Select>
                    <input type='text' className='bg-search-bar h-10 w-2/6 rounded-full outline-none' />

                </div>
            </div>

            <div className='w-full min-h-screen flx flex-wrap justify-start items-center'>
                {isLoading ? (
                    <Skeleton count={5} height={200} width={150} />
                ) : (

                    <InfiniteScroll
                        dataLength={totalPage}
                        next={fetchMoviePerPage}
                        hasMore={true}
                        loader={<h1 className='w-full text-white text-2xl text-center mt-16'>Loading...</h1>}
                        endMessage={
                            <p style={{ textAlign: 'center' }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                    >
                        <div className='w-full flex flex-wrap justify-start items-center gap-11'>
                            {movie.map((item) => (
                                <NavLink key={item.id} to={`/movieDetails/${item.id}`} className='w-1/6 flex'>
                                    <MovieCard item={item} />
                                </NavLink>
                            ))}
                        </div>
                    </InfiniteScroll>

                )}
            </div>
        </div>
    )
}