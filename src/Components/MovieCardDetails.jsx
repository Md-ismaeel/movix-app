import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import noPosterImg from "../assets/moviesImages/no-poster.png";

export const MovieCardDetails = () => {
    const { movieDetail, credits } = useSelector((state) => state.MovieSlice);

    const {
        backdrop_path,
        genres,
        overview,
        poster_path,
        release_date,
        runtime,
        status,
        tagline,
        title,
        vote_average,
        first_air_date,
        original_name,
    } = movieDetail;

    const filteredDirector = credits.crew && credits.crew.filter((e) => (e.department === 'Directing'))

    const filteredWriter = credits.crew && credits.crew.filter((e) => (e.department === 'Writing'))


    return (
        <>
            <div className={`w-full min-h-screen bg-[${backdrop_path}]`}>
                {movieDetail ? (
                    <div className="w-full h-full flex px-0 mt-20">

                        <div className="w-2/5 h-[550px] px-12">
                            <img
                                src={poster_path ? `https://image.tmdb.org/t/p/original/${poster_path}` : noPosterImg}
                                className="w-96 h-full gg-center rounded-xl mb-1"
                                alt={title || original_name || "No poster available"}
                            />
                        </div>

                        <div className="w-1/2">

                            <h1>
                                <span>{title || original_name}</span>
                                <span>
                                    {(release_date || first_air_date) &&
                                        (release_date || first_air_date).length >= 4
                                        ? `(${(release_date || first_air_date).slice(0, 4)})`
                                        : ""}
                                </span>
                            </h1>

                            <p>{tagline}</p>

                            <div>
                                {genres && genres.map((e, i) => (
                                    <p key={i}>{e.name}</p>
                                ))}
                            </div>
                            <p>{vote_average}</p>
                            <p>Overview: {overview}</p>

                            <div className="flex mt-6">
                                <p>Status: {status}</p>
                                <p>Release Date: {release_date}</p>
                                <p>Runtime: {runtime}</p>
                            </div>

                            {credits.crew && credits.crew.length !== 0 ? (
                                <div className="w-full flex">

                                    {filteredDirector ?
                                        <p className="mb-4">Director: {filteredDirector ? filteredDirector[0]?.name : ''}</p> : ''
                                    }
                                    <hr />

                                    <div className="w-full flex ">Writer:
                                        {filteredWriter && filteredWriter.map((e, i) => (
                                            <p key={i} className=""> {e.name}</p>
                                        ))}
                                    </div>
                                    <hr />

                                </div>
                            ) : (
                                <div>
                                    Creator: {credits.cast && credits.cast.map((elem, index) => (<p key={index}>{elem.name}</p>))}
                                </div>
                            )
                            }
                        </div>

                    </div>
                ) : (
                    ""
                )}
            </div>
        </>
    );
};
