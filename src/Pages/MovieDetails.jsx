import React from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {

    const { id } = useParams()
    console.log(id);
    return (
        <div className='text-white'>
            MovieDetails {id}
        </div>
    )
}
