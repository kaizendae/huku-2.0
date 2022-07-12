const requests = {
  fetchTrending: {
    title: 'Trending',
    url: `/trending/all/week?language=en-US`,
  },
  fetchTopRated: {
    title: 'Top Rated',
    url: `/movie/top_rated?language=en-US`,
  },
  fetchActionMovies: {
    title: 'Action',
    url: `/discover/movie?with_genres=28`,
  },
  fetchComedyMovies: {
    title: 'Comedy',
    url: `/discover/movie?with_genres=25`,
  },
  fetchHorrorMovies: {
    title: 'Horror',
    url: `/discover/movie?with_genres=27`,
  },
  fetchRomanceMovies: {
    title: 'Romance',
    url: `/discover/movie?with_genres=35`,
  },
  fetchMystery: {
    title: 'Mystery',
    url: `/discover/movie?with_genres=9648`,
  },
  fetchSciFi: {
    title: 'Trending',
    url: `/discover/movie?with_genres=878`,
  },
  fetchWestern: {
    title: 'Trending',
    url: `/discover/movie?with_genres=37`,
  },
  fetchAnimation: {
    title: 'Animation',
    url: `/discover/movie?with_genres=16`,
  },
  fetchTV: {
    title: 'TV Movie',
    url: `/discover/movie?with_genres=10770`,
  },
};

export default requests;
