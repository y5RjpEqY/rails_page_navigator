import React, { ReactNode } from "react";
import { Store, initialState, useEnhance } from "./enhance";
import { ActionType } from "./reducer";

type StateContextType = {
  state: Store;
  dispatch: React.Dispatch<ActionType>;
};

// 一旦適当な初期値を入れてごまかす
export const StateContext = React.createContext<StateContextType>({
  state: initialState,
  dispatch: () => {},
});

type Props = {
  children: ReactNode;
};

export function StateProvider(props: Props) {
  const { children } = props;
  const { state, dispatch } = useEnhance();

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}
