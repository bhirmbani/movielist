import instance from "@/libs/api-handler";

export const getMovieDetails = async ({ id }: { id: string }) => {
  try {
    const response = await instance.get(`movie/${id}`);
    return response.data;
  } catch (error) {
    throw Error(`${error}`);
  }
};
