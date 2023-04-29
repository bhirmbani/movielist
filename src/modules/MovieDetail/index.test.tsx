import {
  render,
  fireEvent,
  screen,
  renderHook,
  waitFor,
} from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as nextRouter from "next/router";
import MovieDetailModule from ".";

const queryClient = new QueryClient();

const wrapper = () => (
  <QueryClientProvider client={queryClient}>
    <MovieDetailModule />
  </QueryClientProvider>
);

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ route: "/", query: {} }));

test("movie detail element expected", async () => {
  const component = render(wrapper());
  await waitFor(() => expect(component).toBeVisible);
});
