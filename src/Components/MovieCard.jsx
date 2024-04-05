import React from 'react'
import noPosterPng from "../assets/moviesImages/no-poster.png"
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const MovieCard = ({ item }) => {
    const {
        poster_path,
        title,
        name,
        release_date,
        first_air_date,
        vote_average
    } = item;



    const getBorderColor = () => {
        let vote = Math.round(vote_average);
        if (vote >= 7) {
            return 'border-green-500';
        } else if (vote >= 5) {
            return 'border-yellow-500';
        } else {
            return 'border-red-500';
        }
    };


    return (
        <>

            <div className='min-w-56 rounded-md mt-4 mb-10 relative'>
                {poster_path ? (

                    <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} className='w-full min-h-60 rounded-xl mb-1' alt={title || name} />
                ) : (
                    <img src={noPosterPng} className='w-full min-h-60 rounded-xl mb-1' alt='notImages' />
                )}

                <div style={{ background: 'white', borderRadius: '50%', width: '48px', height: '48px', position: 'absolute', left: '8px', bottom: '70px', right: '2px' }}>
                    <CircularProgressbar
                        className='h-12 w-12'
                        value={Math.trunc(Number(vote_average) * 10)}
                        text={`${vote_average.toFixed(1)}%`}
                        styles={buildStyles({
                            rotation: 0.25,
                            strokeLinecap: 'butt',
                            textSize: '24px',
                            pathTransitionDuration: 0.5,
                            // pathColor: `
                            // rgba(62, 152, 199, ${(Math.trunc(Number(vote_average) * 100) / 100)})
                            // `,
                            border: `2px solid ${getBorderColor()}`,
                            pathColor: `${getBorderColor()}`,
                            textColor: '#f88',
                            trailColor: '#d6d6d6',
                            backgroundColor: 'transparent',
                        })}
                    />
                </div>

                <div className='relative text-white'>
                    <h1 className='text-xl mt-4'>{(title || name).length >= 20 ? (title || name).slice(0, 20) + "..." : title || name}</h1>
                    <p className='mt-1 opacity-60'>{release_date || first_air_date}</p>
                </div>
            </div>

        </>
    )
}

export default MovieCard;