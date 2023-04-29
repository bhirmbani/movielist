import {
  render,
  fireEvent,
  screen,
  renderHook,
  waitFor,
} from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MovieCardItemModule from ".";
import * as nextRouter from "next/router";

const queryClient = new QueryClient();

const wrapper = () => (
  <QueryClientProvider client={queryClient}>
    <MovieCardItemModule />
  </QueryClientProvider>
);

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ route: "/" }));

test("movie card element expected", async () => {
  const component = render(wrapper());
  await waitFor(() => expect(component).toBeVisible);
});
