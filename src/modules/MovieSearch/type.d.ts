type SearchMoviesRes = {
  page: number;
  results: SearchMovieDetail[];
  total_pages: number;
  total_results: number;
};

type SearchMovieDetail = {
  title: string;
  release_date: string;
  poster_path: string;
  popularity: number;
  overview: string;
  id: number;
  vote_average: number;
  vote_count: number;
};

type MovieSearchAtom = {
  query: string;
  index?: number | null;
};

type MovieDetailRes = {
  title: string;
  release_date: string;
  poster_path: string;
  popularity: number;
  overview: string;
  id: number;
  vote_average: number;
  vote_count: number;
};
