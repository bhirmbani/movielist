import { Card } from "@/components";
import { useQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { movieSearchAtom } from "../MovieSearch/atom";

const MovieCardItemModule = () => {
  const state = useAtomValue(movieSearchAtom);
  const { isFetched, isRefetching, data } = useQuery<SearchMoviesRes>(
    ["searchMovies"],
    { enabled: false }
  );

  console.log(state)

  const picked = data?.results
    ? data?.results[state.index ? state.index : 0]
    : { poster_path: "", title: "", overview: "" };

  if (state.query === "" || (!state.index && state.index !== 0)) {
    return <p>Welcome to Movielist</p>;
  }

  

  return (
    <Card
      alt={picked.title}
      title={picked.title}
      overview={picked.overview}
      width={150}
      height={300}
      src={`${process.env.NEXT_PUBLIC_MOVIEDB_IMG}/${picked.poster_path}`}
    />
  );
};

export default MovieCardItemModule;
