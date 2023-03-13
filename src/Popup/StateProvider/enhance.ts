import { useReducer } from "react";
import { reducer } from "./reducer";

export type Store = {
    paths: string[],
    selectedPath: string,
    url: string,
}

export const initialState: Store = {
    paths: [],
    selectedPath: "",
    url: "",
}

export function useEnhance() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return { state, dispatch }
}

