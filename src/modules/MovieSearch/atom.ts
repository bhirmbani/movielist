import { atom } from "jotai";

export const movieSearchAtom = atom<MovieSearchAtom>({ query: "", index: null });
