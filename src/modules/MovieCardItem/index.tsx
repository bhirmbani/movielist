import { Card } from "@/components";
import { useQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { useRouter } from "next/router";
import { movieSearchAtom } from "../MovieSearch/atom";

const MovieCardItemModule = () => {
  const router = useRouter();
  const state = useAtomValue(movieSearchAtom);
  const { isFetched, isRefetching, data } = useQuery<SearchMoviesRes>(
    ["searchMovies"],
    { enabled: false }
  );

  const picked = data?.results
    ? data?.results[state.index ? state.index : 0]
    : { poster_path: "", title: "title", overview: "", id: 0 };

  if (state.query === "" || (!state.index && state.index !== 0)) {
    return null;
  }

  const onClickDetail = () => {
    router.push(`/detail?id=${picked.id}`);
  };

  return (
    <Card
      onClick={onClickDetail}
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
