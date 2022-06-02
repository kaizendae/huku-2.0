import Header from '@/components/Header';
import Nav from '@/components/Nav';
import Results from '@/components/Results';
import requests from '@/utils/requests';

type Movie = {
  genre_ids?: any[];
  original_language?: string;
  original_title?: string;
  poster_path?: string;
  video?: false;
  vote_average?: 7.2;
  overview?: string;
  id: number;
  vote_count: number;
  release_date: string;
  adult: boolean;
  backdrop_path: string;
  title: string;
  popularity: number;
  media_type: string;
};

function Index(props: any) {
  // const router = useRouter();
  // console.log(props.results);
  return (
    <>
      {/* Header */}
      <Header />

      {/* Navber */}
      <Nav />
      {/* Results */}
      <Results results={props.results} />
    </>
  );
}

export default Index;

export async function getServerSideProps(params: any) {
  const { genre } = params.query;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());
  return {
    props: {
      results: request.results,
    },
  };
}
