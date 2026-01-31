import { atom } from "jotai";

export const todoAtom = atom<{ id: string, name: string }[]>([]);
export const loadingAtom = atom<boolean>(false);