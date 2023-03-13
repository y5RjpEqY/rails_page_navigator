import { useReducer } from "react";
import { reducer } from "./reducer";

export type Store = {
    paths: string[],
    selectedPath: string,
}

export const initialState: Store = {
    paths: [],
    selectedPath: "",
}

export function useEnhance() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return { state, dispatch }
}

