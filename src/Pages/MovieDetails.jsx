import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setMovieDetails, setCredits } from '../Slice/MovieSlice'
import { fetchApi } from '../utils/api'
import { MovieCardDetails } from '../Components/MovieCardDetails'
import { useLocation } from 'react-router-dom'
import Profile from '../Components/Profile'


export const MovieDetails = () => {

    const { id } = useParams()
    const { pathname } = useLocation()
    const location = pathname.split('/')
    // console.log("location", location[1]);

    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)

    const fetchMovieData = async () => {

        setIsLoading(true)
        const response = await fetchApi(`https://api.themoviedb.org/3/${location[1]}/${id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
                },
            })
        dispatch(setMovieDetails(response.data))
        setIsLoading(false)
    }


    const fetchCreditData = async () => {

        setIsLoading(true)
        const response = await fetchApi(`https://api.themoviedb.org/3/${location[1]}/${id}/credits`,

            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
                },
            })
        dispatch(setCredits(response.data));
        setIsLoading(false)
    }

    useEffect(() => {
        fetchMovieData()
        fetchCreditData()

        return () => {
            dispatch(setMovieDetails({}))
            dispatch(setCredits([]))

        }
    }, [location[1]])

    return (
        <div className='text-white w-full flex flex-col'>
            <MovieCardDetails />
            <Profile />
        </div>
    )
}
