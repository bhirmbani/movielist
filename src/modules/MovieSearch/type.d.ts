type SearchMoviesRes = {
  page: number;
  results: {
    title: string;
    release_date: string;
    poster_path: string;
    popularity: number;
    overview: string;
    id: number;
  }[];
  total_pages: number;
  total_results: number;
};