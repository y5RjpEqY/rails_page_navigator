import { useEffect, useContext } from "react";
import axios from "axios";
import { StateContext } from "./StateProvider";
import { actionTypes } from "common/actionTypes";

import { host, ignoreList } from "common/const";

export function useEnhance() {
  const { dispatch } = useContext(StateContext);

  useEffect(() => {
    axios
      .get(`${host}/rails/info/routes?path=/`)
      .then(({ data: { fuzzy } }) => {
        dispatch({ type: actionTypes.SET_PATHS, payload: extractPath(fuzzy) });
      });
  }, []);
}

function extractPath(data: string[]): string[] {
  return [...new Set(data)].reduce((acc: string[], value: string) => {
    const path = value.replace("(.:format)", "");
    return ignoreList.includes(path) ? acc : [...acc, path];
  }, []);
}
