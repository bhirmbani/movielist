import { SearchInput } from "@/components";
import useDebounce from "@/utils/hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import Image from "next/image";
import { useEffect, useState } from "react";
import { movieSearchAtom } from "./atom";
import { searchMovies } from "./services";

const MovieSearchModule = () => {
  const [state, setState] = useAtom(movieSearchAtom);
  const { data, refetch, isRefetching, isFetched } = useQuery<SearchMoviesRes>(
    ["searchMovies"],
    async () => {
      return await searchMovies({ query: state.query });
    },
    { enabled: false }
  );

  const debouncedVal = useDebounce(state.query, 350);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ query: e.target.value });
  };

  const onClickMovie = (index: number) => {
    setState((prevState) => ({ ...prevState, index }));
  };

  useEffect(() => {
    if (debouncedVal) {
      refetch();
    }
  }, [debouncedVal, refetch]);

  console.log(data);

  return (
    <SearchInput
      setValue={(val) => onChangeValue(val)}
      value={state.query}
      isResult={!isRefetching && isFetched && state.query !== "" ? true : false}
      isLoading={isRefetching}
      placeholder="Search movies"
      ResultComponent={
        data?.results.length !== 0 ? (
          <ul className="dropdown-content flex flex-row menu max-h-search-result overflow-scroll p-2 shadow bg-base-100 rounded-box">
            {data?.results.map((each, index) => (
              <li
                onClick={() => onClickMovie(index)}
                key={each.id}
                className="min-w-full flex flex-row"
              >
                <a className="w-full">
                  <Image
                    alt={each.title}
                    width={32}
                    height={32}
                    src={`${process.env.NEXT_PUBLIC_MOVIEDB_IMG}/${each.poster_path}`}
                  />
                  {each.title}
                  <span className="text-xs">{each.release_date}</span>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center mt-5">
            <p>No movies found!</p>
          </div>
        )
      }
    />
  );
};

export default MovieSearchModule;
