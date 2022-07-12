import { ThumbUpIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React from 'react';

import { getFlagEmoji } from '@/utils/flag-utils';

function MovieDetails({ movie }: any) {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  return (
    <div className=" group mx-60 mt-5 cursor-pointer p-2 transition duration-200 ease-in hover:z-50">
      <main className="grid grid-cols-10">
        <div className="col-span-5">
          <Image
            layout="responsive"
            alt={movie.poster_path}
            src={
              `${BASE_URL}${movie.poster_path || movie.backdrop_path}` ||
              `${BASE_URL}${movie.poster_path}`
            }
            height={330}
            width={220}
            className="rounded-md"
          />
        </div>
        <div className="col-span-5">
          <div className="p-2">
            <h2 className="mt-1 items-center text-2xl text-white transition-all ease-in-out group-hover:font-bold">
              {movie.title || movie.original_name}{' '}
              {getFlagEmoji(movie.production_countries[0].iso_3166_1)}
            </h2>

            <p className="max-w-md"> {movie.overview} </p>

            <p className="flex items-center opacity-0 group-hover:opacity-100">
              {' '}
              {movie.media_type && `${movie.media_type}  `}{' '}
              {movie.release_date || movie.first_air_date}{' '}
              <ThumbUpIcon className="mx-2 h-5" /> {movie.vote_count}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MovieDetails;
