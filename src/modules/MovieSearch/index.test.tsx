import {
  render,
  fireEvent,
  screen,
  renderHook,
  waitFor,
} from "@testing-library/react";
import MovieSearchModule from ".";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const wrapper = () => (
  <QueryClientProvider client={queryClient}>
    <MovieSearchModule />
  </QueryClientProvider>
);

test("search input show expected value", async () => {
  const component = render(wrapper())
  const input = screen.getByPlaceholderText('Search movies')
  fireEvent.change(input, {target: {value: 'juman'}})
  await waitFor(() => expect(input.value).toBe('juman'));
});
