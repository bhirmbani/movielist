import SocialMediaSharer from "@/components/SocialMediaSharer";
import { useQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { movieSearchAtom } from "../MovieSearch/atom";
import { getMovieDetails } from "./services";

const MovieDetailModule = () => {
  const router = useRouter();
  const state = useAtomValue(movieSearchAtom);
  const { data } = useQuery<SearchMoviesRes>(["searchMovies"], {
    enabled: false,
  });

  const movieDetail = useQuery<MovieDetailRes>(
    ["movieDetail"],
    async () => {
      return await getMovieDetails({
        id: router.query.id ? (router.query.id as string) : "0",
      });
    },
    { enabled: false }
  );

  const picked = data?.results
    ? data?.results[state.index ? state.index : 0]
    : {
        poster_path: "",
        title: "",
        overview: "",
        release_date: "",
        popularity: 0,
        vote_average: 0,
        vote_count: 0,
      };

  useEffect(() => {
    if (!data?.results && router.query.id) {
      movieDetail.refetch();
    }
  }, [router]);

  return movieDetail.isFetching ? (
    <p>Loading..</p>
  ) : (
    <div className="flex flex-1 w-full">
      <div className="flex">
        <Image
          alt={picked.title || (movieDetail.data?.title as string)}
          width={500}
          height={500}
          src={`${process.env.NEXT_PUBLIC_MOVIEDB_IMG}/${
            picked.poster_path || movieDetail.data?.poster_path
          }`}
        />
      </div>
      <div className="flex flex-1 p-5">
        <div>
          <h1 className="text-2xl font-semibold">
            {picked.title || movieDetail.data?.title}
          </h1>
          <p className="pb-2">
            Release date:{" "}
            {picked.release_date || movieDetail.data?.release_date}
          </p>
          <p className="pb-2">
            {picked.overview || movieDetail.data?.overview}
          </p>
          <p>
            Popularity:{" "}
            {Math.ceil(
              picked.popularity || (movieDetail.data?.popularity as number)
            )}
          </p>
          <p className="pb-2">
            Vote rating:{" "}
            {Math.ceil(
              picked.vote_average || (movieDetail.data?.vote_average as number)
            )}
            /10 from {picked.vote_count || movieDetail.data?.vote_count} votes
          </p>
          <SocialMediaSharer />
          <a
            target="_blank"
            href={`https://www.youtube.com/results?search_query=${
              picked.title || movieDetail.data?.title
            } trailer`}
            role="button"
            className="btn"
          >
            Trailer
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailModule;
