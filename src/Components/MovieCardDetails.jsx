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

    // console.log(movieDetail);
    console.log(credits);

    const filteredDirector = credits.crew && credits.crew.filter((e) => (e.department === 'Directing'))

    const filteredWriter = credits.crew && credits.crew.filter((e) => (e.department === 'Writing'))


    return (
        <>
            <div className="w-full min-h-screen">
                {movieDetail ? (
                    <div className="w-full h-full flex px-10 mt-20">

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
                            <p>Overview: {overview}</p>

                            <div className="flex mt-6">
                                <p>Status: {status}</p>
                                <p>Release Date: {release_date}</p>
                                <p>Runtime: {runtime}</p>
                            </div>

                            {credits.crew ? (
                                <div className="w-full flex flex-col">

                                    {filteredDirector ?
                                        <p className="mb-4">Director: {filteredDirector ? filteredDirector[0].name : ''}</p> : ''
                                    }
                                    <hr />

                                    <div className="w-full flex ">
                                        {/* {filteredWriter && filteredWriter.map((e, i) => (
                                            <p key={i} className="">{e.name}</p>
                                        ))} */}
                                        Writer:

                                        <p>{filteredWriter ? filteredWriter[0].name : ''}</p>
                                        <p>{filteredWriter ? filteredWriter[1].name : ''}</p>
                                        <p>{filteredWriter ? filteredWriter[2].name : ''}</p>
                                    </div>
                                    <hr />

                                </div>
                            ) : (
                                ""
                            )
                            }

                            {/* {!credits.crew && credits.cast && (
                                <div>
                                    <p>Creator:</p>
                                    {credits.cast.map((actor, index) => (
                                        <p key={index}>{actor.name}</p>
                                    ))}
                                </div>
                            )}

                            {!credits.cast && credits.crew && (<div>
                                {filteredDirector && (
                                    <p>Director: {filteredDirector.name}</p>
                                )}
                                <hr />
                                <div className="w-full flex ">
                                    {filteredWriter.map((writer, index) => (
                                        <p key={index}>Writer: {writer.name}</p>
                                    ))}
                                </div>
                                <hr />
                            </div>)} */}


                        </div>

                    </div>
                ) : (
                    ""
                )}
            </div>
        </>
    );
};


