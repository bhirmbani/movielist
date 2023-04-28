import { Card } from "@/components";
import { useQuery } from "@tanstack/react-query";

const MovieCardItemModule = () => {
  const { isError, error, isLoading, data } = useQuery<SearchMoviesRes>(
    ["searchMovies"],
    { enabled: false }
  );

  if (!data?.results) {
    return <p>Welcome to Movielist</p>
  }

  return <Card />;
};

export default MovieCardItemModule;
