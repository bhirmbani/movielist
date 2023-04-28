import instance from "@/libs/api-handler";

export const searchMovies = async ({ query }: { query: string }) => {
  try {
    const response = await instance.get("search/movie", {
      params: {
        query,
      },
    });
    return response.data;
  } catch (error) {
    throw Error(`${error}`);
  }
};
