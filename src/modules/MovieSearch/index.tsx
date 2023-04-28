import { SearchInput } from "@/components";
import useDebounce from "@/utils/hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect, useState } from "react";
import { searchMovies } from "./services";

const MovieSearchModule = () => {
  const [value, setValue] = useState("");
  const { data, refetch, isRefetching, isFetched } = useQuery<SearchMoviesRes>(
    ["searchMovies"],
    async () => {
      return await searchMovies({ query: value });
    },
    { enabled: false }
  );

  const debouncedVal = useDebounce(value, 350);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
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
      value={value}
      isResult={
        !isRefetching && isFetched && debouncedVal !== "" ? true : false
      }
      isLoading={isRefetching}
      placeholder="Search movies"
      ResultComponent={
        data?.results.length !== 0 ? (
          <ul className="dropdown-content flex flex-row menu max-h-search-result overflow-scroll p-2 shadow bg-base-100 rounded-box">
            {data?.results.map((each) => (
              <li key={each.id} className="min-w-full flex flex-row">
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
