import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import noPosterPng from "../assets/moviesImages/no-poster.png"
import { CiPlay1 } from 'react-icons/ci'
import ReactPlayer from 'react-player/lazy'

export const OfficialVideos = () => {

    const { videos } = useSelector((state) => state.MovieSlice);
    // console.log(videos);

    return (

        <>
            {videos.length !== 0 ?
                <div className='w-full px-12 mt-10'>

                    <h1 className='text-2xl'>Official Videos</h1>

                    <div id='profile' className='w-full flex  justify-start items-center gap-6 mt-4 overflow-scroll'>

                        {videos && videos.map((elem, index) => (
                            <div key={index} className='flex flex-col justify-start items-center w-[300px] h-[400px]'>

                                <NavLink to={`video/${elem.id}`} className='w-[270px] h-[160px] hover:opacity-50 ease-linear duration-300 relative'>
                                    <img src={elem.key ? `https://img.youtube.com/vi/${elem.key}/mqdefault.jpg` : noPosterPng} className='w-[100%] h-[100%] rounded bg-cover' />

                                    <span className="h-[50px] w-[50px] text-3xl rounded-full absolute top-[35%] right-[35%] flex justify-center items-center border-2 hover:border-pink-700 hover:text-pink-700 cursor-pointer opacity-100">
                                        <CiPlay1 className="z-2 " />
                                    </span>

                                    <ReactPlayer url={`https://www.youtube.com/watch?v=${elem.key}`} className='absolute z-10 top-0' />

                                </NavLink>

                                <p className='w-full flex justify-start items-center mt-4'>{elem.name ? elem.name : 'N/A'}</p>

                            </div>
                        ))}
                    </div>

                </div> : ''
            }
        </>
    )
}

