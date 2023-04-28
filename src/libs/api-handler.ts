import axios, { AxiosError, AxiosResponse } from "axios";

function successResponseInterceptor(response: AxiosResponse) {
  return response;
}

async function errorResponseInterceptor(error: AxiosError) {
  console.info(`error: ${JSON.stringify(error)}`);

  if (error.response?.data) {
    // handle access token expired on client side
    if (error.response.status === 401) {
      // return if called serverside
      // TODO: create constant for the message
      if (typeof window === "undefined") {
        return Promise.reject("access_token_expired_serverside");
      }
      return;
    }
    const errorMsg = error.response?.data as {
      message: string;
      error?: string;
    };
    console.error(errorMsg.message ? errorMsg.message : errorMsg.error);
  } else {
    console.error(error.message || "Error!");
  }
  return Promise.reject(error);
}

function apiInstance({ needAuth = true, isSuccessMsg = false }) {
  const baseURL = process.env.NEXT_PUBLIC_MOVIEDB_URL;
  const instance = axios.create({ baseURL });
  if (needAuth) {
    try {
      // client side only
      if (typeof window !== "undefined") {
        instance.defaults.headers.common[
          "authorization"
        ] = `Bearer ${process.env.NEXT_PUBLIC_MOVIEDB_APIKEY_V4}`;
      }
    } catch (error) {
      throw Error(`${error}`);
    }
  }
  instance.interceptors.response.use((res: any) => {
    if (isSuccessMsg) {
      console.info(res.data.message || "Success!");
    }
    return successResponseInterceptor(res);
  }, errorResponseInterceptor);

  return instance;
}

const instance = apiInstance({})

export default instance;
