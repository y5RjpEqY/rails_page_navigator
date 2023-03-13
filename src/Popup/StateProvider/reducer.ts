import React from "react";
import { actionTypes } from "common/actionTypes";

import { Store } from "./enhance";

export type ActionType = {
    type: typeof actionTypes.SET_PATHS,
    payload: string[],
} | {
    type: typeof actionTypes.SET_SELECTED_PATH,
    payload: string
}

export const reducer: React.Reducer<Store, ActionType> = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_PATHS:
            return { ...state, paths: action.payload }
        case actionTypes.SET_SELECTED_PATH:
            return { ...state, selectedPath: action.payload }
        default:
            return state
    }
}