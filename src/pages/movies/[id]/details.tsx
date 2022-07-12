import React from 'react';

import Header from '@/components/Header';
import MovieDetails from '@/components/MovieDetails';
import Nav from '@/components/Nav';

export default function Details(props: any) {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Navber */}
      <Nav />
      {/* details components */}
      <MovieDetails movie={props.movie} />
    </>
  );
}

export async function getServerSideProps(context: any) {
  // getting the movie results on the server side and feeding them to the results component
  // const { genre } = params.query;
  const { API_KEY } = process.env;
  const { id } = context.query;
  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    // https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}
  ).then((res) => res.json());
  // console.log(request);
  return {
    props: {
      movie: request,
    },
  };
}
