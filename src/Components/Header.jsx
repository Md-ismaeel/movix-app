import React from 'react'

export const Header = () => {
    return (
        <div className='w-full text-white'>
            <div className={`w-full min-h-screen flex flex-col justify-center items-center gap-3`}>

                <h1 className='text-7xl font-semibold'>Welcome.</h1>
                <p className='text-2xl'>Millions of movies, TV shows and people to discover. Explore now.</p>

                <div className='w-full flex justify-center items-center mt-4'>
                    <input type='text' placeholder='Search for a movie and tv shoes....' className='w-2/4 h-14 rounded-l-full focus:outline-none outline-none px-10 text-xl text-slate-600' />
                    <button className='w-2/12 bg-button-gradient h-14 rounded-md text-xl rounded-r-full'>search</button>
                </div>

            </div>
        </div>
    )
}
